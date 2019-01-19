//@ts-check

/*
Generic show/hide transition module
*/

import { isClient } from "./iso";
import { styleDurationToMs } from "./style";

/**
 * 
 * @typedef {{ el?: HTMLElement, duration?: number, hasDuration?: boolean, delay?: number, hasDelay?: boolean, timingFunction?: string, transitionClass?: string, transitionClassElement?: HTMLElement, before?: () => void, after?: () => void, transition?: () => void, showClass?: string, showClassElement?: HTMLElement  }} TransitionOpts
 */

const DEFAULT_DURATION = .240;
const DEFAULT_DELAY =    0;

/**
 * 
 * @param {TransitionOpts} opts 
 * @returns {Promise}
 */
export const show = opts =>
  transition(opts, "show");

/**
 * 
 * @param {TransitionOpts} opts
 * @returns {Promise} 
 */
export const hide = opts =>
  transition(opts, "hide");

/**
 * 
 * @param {TransitionOpts} opts 
 * @param {"show"|"hide"} state 
 * @returns {Promise}
 */
const transition = (opts, state) => {
  const el = opts.el;
  if (!el) {
    return Promise.resolve();
  } else {
    return new Promise(resolve => {
      const style = el.style;
      /**
       * @type {object} computedStyle
       */
      const computedStyle = isClient
        ? window.getComputedStyle(el)
        : {};
      const duration = opts.hasDuration && opts.duration !== undefined
        ? opts.duration * 1000.0
        : styleDurationToMs(computedStyle.transitionDuration);
      const delay = opts.hasDelay && opts.delay !== undefined
        ? opts.delay * 1000.0
        : styleDurationToMs(computedStyle.transitionDelay);
      const timingFunction = opts.timingFunction || computedStyle.transitionTimingFunction;

      if (opts.transitionClass) {
        const transitionClassElement = opts.transitionClassElement || el;
        transitionClassElement.classList.add(opts.transitionClass);
      }

      const before = () => {
        style.transitionDuration = "0ms";
        style.transitionDelay = "0ms";
        if (opts.before && typeof opts.before === "function") {
          opts.before();
        }
      };

      const maybeBefore = (opts.before && state === "show")
        ? before
        : (opts.before && state === "hide")
          ? before
          : null;

      const after = () => {
        if (opts.after && typeof opts.after === "function") {
          opts.after();
        }
      };

      const applyTransition = () => {
        style.transitionDuration = duration + "ms";
        style.transitionDelay = delay + "ms";

        if (timingFunction) {
          style.transitionTimingFunction = timingFunction;
        }
        if (opts.showClass) {
          const showClassElement = opts.showClassElement || el;
          showClassElement.classList[(state === "show") ? "add" : "remove"](opts.showClass);
        }
        if (opts.transition) {
          opts.transition();
        }
      };

      const doTransition = () => {
        applyTransition();
        setTimeout(() => {
          if (after) {
            after();
          }
          if (opts.transitionClass) {
            const transitionClassElement = opts.transitionClassElement || el;
            transitionClassElement.classList.remove(opts.transitionClass);
            el.offsetHeight; // force reflow
          }
          resolve();
        }, duration + delay);
      };

      const maybeDelayTransition = () => {
        if (duration === 0) {
          doTransition();
        } else {
          setTimeout(doTransition, 0);
        }
      };

      if (maybeBefore) {
        maybeBefore();
        el.offsetHeight; // force reflow
        setTimeout(() => {
          maybeDelayTransition();
        }, 0);
      } else {
        maybeDelayTransition();
      }
    });
  }
};

/**
 * 
 * @param {object} params
 * @param {boolean} [params.isShow]
 * @param {object} [params.state]
 * @param {object} [params.attrs]
 * @param {Array<HTMLElement>} [params.domElements]
 * @param {() => void} [params.beforeTransition]
 * @param {() => void} [params.afterTransition]
 * @param {string} [params.showClass]
 * @param {string} [params.transitionClass]
 * @returns {Promise}
 */
export const transitionComponent = ({ isShow, state, attrs, domElements, beforeTransition, afterTransition, showClass, transitionClass }) => {
  if (state.transitioning()) {
    return Promise.resolve();
  }
  state.transitioning(true);
  state.visible(isShow ? true : false);
  if (beforeTransition) {
    beforeTransition();
  }
  const duration = attrs[isShow ? "showDuration" : "hideDuration"];
  const delay = attrs[isShow ? "showDelay" : "hideDelay"];
  const timingFunction = attrs[isShow ? "showTimingFunction" : "hideTimingFunction"];
  const transitions = attrs.transitions;
  const fn = isShow ? show : hide;
  const opts1 = {
    ...attrs,
    ...domElements,
    showClass,
    transitionClass,
    duration,
    delay,
    timingFunction
  };
  const opts2 = {
    ...opts1,
    ...(transitions
      ? transitions[isShow ? "show" : "hide"](opts1)
      : undefined
    )
  };
  const opts3 = {
    ...opts2,
    ...{
      duration: opts2.duration !== undefined
        ? opts2.duration
        : DEFAULT_DURATION,
      hasDuration: opts2.duration !== undefined,
      delay: opts2.delay !== undefined
        ? opts2.delay
        : DEFAULT_DELAY,
      hasDelay: opts2.delay !== undefined,
    }
  };
  return fn(opts3).then(() => {
    const id = state.instanceId;
    if (attrs[isShow ? "fromMultipleDidShow" : "fromMultipleDidHide"]) {
      attrs[isShow ? "fromMultipleDidShow" : "fromMultipleDidHide"](id); // when used with Multiple; this will call attrs.didShow / attrs.didHide
    } else if (attrs[isShow ? "didShow" : "didHide"]) {
      attrs[isShow ? "didShow" : "didHide"](id); // when used directly
    }
    if (afterTransition) {
      afterTransition();
    }
    state.transitioning(false);
  });
};
