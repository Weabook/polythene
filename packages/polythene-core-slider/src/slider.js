import { isTouch, pointerStartMoveEvent, pointerMoveEvent, pointerEndMoveEvent, isClient } from "polythene-core";
import { filterSupportedAttributes } from "polythene-core";
import { customTheme } from "./theme";
import themeVars from "./theme/vars";
import classes from "./classes";

export const theme = customTheme;

let focusElement;

const deFocus = state => {
  if (focusElement) {
    focusElement.blur();
  }
  focusElement = undefined;
  state.hasFocus(false);
};

const focus = (state, el) => {
  deFocus(state);
  focusElement = el;
  state.hasFocus(true);
};

const positionFromEvent = (e, isVertical) => (
  // isVertical not yet implemented
  isTouch && e.touches
    ? isVertical ? e.touches[0].pageY : e.touches[0].pageX
    : isVertical ? e.pageY : e.pageX);

const updatePinPosition = state => {
  if (state.controlEl && state.pinEl) {
    const left = state.fraction() * state.rangeWidth;
    state.pinEl.style.left = left + "px";
  }
};

const updateValue = (state, value) => {
  state.setValue(value);
  updatePinPosition(state);
};

const generateTickMarks = (h, min, max, stepSize) => {
  const steps = Math.round((max - min) / stepSize);
  const items = [];
  let s = steps + 1;
  while (s > 0) {
    items.push(h("div", {
      className: classes.tick,
      key: `tick-${s}`
    }));
    s--;
  }
  return items;
};

const readRangeData = state => {
  if (state.controlEl && isClient) {
    // range is from the far left to the far right minus the thumb width (max x is at the left side of the thumb)
    state.controlWidth = themeVars.thumb_size;
    state.rangeWidth = state.trackEl.getBoundingClientRect().width - state.controlWidth;
    const styles = window.getComputedStyle(state.trackEl);
    state.rangeOffset = parseFloat(styles.marginLeft);
  }
};

const calculateClickOffset = (state, controlOffset = 0) => {
  state.clickOffset = state.trackEl.getBoundingClientRect().left - (state.rangeOffset - state.controlWidth / 2) + controlOffset;
};

const initControlEvent = (state, e) => {
  const controlPos = state.controlEl.getBoundingClientRect().left;
  const eventPos = positionFromEvent(e);
  const controlOffset = eventPos - controlPos - state.controlWidth / 2;
  calculateClickOffset(state, controlOffset);
};

const initTrackEvent = (state) =>
  calculateClickOffset(state, 0);

const handlePosEvent = (state, e) => {
  const pos = positionFromEvent(e) - state.clickOffset;
  const value = state.min + ((pos - state.rangeOffset) / state.rangeWidth) * (state.max - state.min);
  updateValue(state, value);
};

const startDrag = (state, attrs, e) => {
  if (state.isDragging()) return;
  e.preventDefault();
  state.isDragging(true);
  state.isActive(true);
  deFocus(state);

  const drag = e => {
    if (!state.isDragging()) return;
    handlePosEvent(state, e);
  };

  const endDrag = () => {
    if (!state.isDragging()) return;
    deFocus(state);
    if (isClient) {
      window.removeEventListener(pointerMoveEvent, drag);
      window.removeEventListener(pointerEndMoveEvent, endDrag);
    }
    state.isDragging(false);
    state.isActive(false);
  };

  if (isClient) {
    window.addEventListener(pointerMoveEvent, drag);
    window.addEventListener(pointerEndMoveEvent, endDrag);
  }
  readRangeData(state);

  if (attrs.pin) {
    updatePinPosition(state);
  }
};

const startTrack = (state, attrs, e) => {
  e.preventDefault();
  if (state.isDragging()) {
    return;
  }
  readRangeData(state);
  initTrackEvent(state);
  handlePosEvent(state, e);
  startDrag(state, attrs, e);
};

const createSlider = (vnode, { h, k, hasTicks, interactiveTrack }) => {
  const state = vnode.state;
  const attrs = vnode.attrs;
  const fraction = state.fraction();
  const stepCount = Math.max(10, parseInt(attrs.step, 10) || 1); // not more than 100 steps on the screen

  const onStartTrack = e => (
    startTrack(state, attrs, e)
  );

  const onInitDrag = e => {
    readRangeData(state);
    initControlEvent(state, e);
    startDrag(state, attrs, e);
  };

  const flexValueCss =  fraction + " 1 0%";
  const flexRestValue = 1 - fraction;
  const flexRestCss =   flexRestValue + " 1 0%";

  return h("div",
    Object.assign(
      {},
      { className: classes.track },
      interactiveTrack && !attrs.disabled && {
        [k[`on${pointerStartMoveEvent}`]]: onStartTrack
      }
    ),
    [
      h("div",
        {
          className: classes.trackPart + " " + classes.trackPartValue,
          key: "trackPartValue",
          style: {
            flex: flexValueCss,
            msFlex: flexValueCss,
            WebkitFlex: flexValueCss
          }
        },
        h("div", { className: classes.trackBar },
          h("div", { className: classes.trackBarValue })
        )
      ),
      h("div", Object.assign(
        {},
        {
          className: classes.control,
          key: "control"
        },
        attrs.disabled
          ? { disabled: true }
          : {
            [k.tabindex]: attrs[k.tabindex] || 0,
            [k.onfocus]: () => focus(state, state.controlEl),
            [k.onblur]: () => deFocus(state),
            [k.onkeydown]: e => {
              if (e.key !== "Tab") {
                e.preventDefault();
              }
              if (e.key === "Escape") {
                state.controlEl.blur(e);
              } else if (e.key === "ArrowLeft" || e.key === "ArrowDown") {
                state.decrement(e.shiftKey);
              } else if (e.key === "ArrowRight" || e.key === "ArrowUp") {
                state.increment(e.shiftKey);
              } else if (e.key === "Home") {
                state.setValue(state.min);
              } else if (e.key === "End") {
                state.setValue(state.max);
              } else if (e.key === "PageDown") {
                state.decrement(true);
              } else if (e.key === "PageUp") {
                state.increment(true);
              }
              readRangeData(state);
              updatePinPosition(state);
            }
          },
        !attrs.disabled && {
          [k[`on${pointerStartMoveEvent}`]]: onInitDrag
        },
        attrs.events
          ? attrs.events
          : null,
        hasTicks
          ? { step: stepCount }
          : null
      ),
      attrs.icon
        ? h("div",
          {
            className: classes.thumb,
            key: "icon"
          },
          attrs.icon
          )
        : null
      ),
      h("div",
        {
          className: classes.trackPart + " " + classes.trackPartRest,
          key: "trackPartRest",
          style: {
            flex: flexRestCss,
            msFlex: flexRestCss,
            WebkitFlex: flexRestCss,
            maxWidth: (flexRestValue * 100) + "%" // for IE Edge
          }
        },
        h("div", { className: classes.trackBar },
          h("div", { className: classes.trackBarValue })
        )
      ),
      hasTicks && !attrs.disabled
        ? h("div",
          {
            className: classes.ticks,
            key: "ticks"
          },
          generateTickMarks(h, state.min, state.max, stepCount)
        )
        : null,
      hasTicks && attrs.pin && !attrs.disabled
        ? h("div",
          {
            className: classes.pin,
            key: "pin",
            value: Math.round(state.value())
          }
        )
        : null
    ]
  );
};

export const getInitialState = (vnode, createStream) => {
  const attrs = vnode.attrs;

  const min = attrs.min !== undefined ? attrs.min : 0;
  const max = attrs.max !== undefined ? attrs.max : 100;
  const step = attrs.step !== undefined ? attrs.step : 1;
  const defaultValue = attrs.defaultValue !== undefined
    ? attrs.defaultValue
    : attrs.value !== undefined
      ? attrs.value
      : 0;
  const previousValue = createStream(undefined);
  const isActive = createStream(false);
  const hasFocus = createStream(false);
  const isDragging = createStream(false);
  const fraction = createStream(min);
  const value = createStream(0);

  const setValue = v => {
    if (v < min) v = min;
    if (v > max) v = max;
    value(step ? (Math.round(v / step) * step) : v);
    fraction((value() - min) / (max - min));
    if (attrs.onChange) {
      attrs.onChange({
        value: value()
      });
    }
    previousValue(v);
  };

  const increment = useLargeStep =>
    setValue(value() + (useLargeStep ? 10 : 1) * (step || 1));

  const decrement = useLargeStep =>
    setValue(value() - (useLargeStep ? 10 : 1) * (step || 1));
  
  setValue(defaultValue);
  
  return {
    min,
    max,
    fraction,
    // DOM elements
    trackEl: null,
    controlEl: null,
    pinEl: null,
    // functions
    setValue,
    increment,
    decrement, 
    // streams
    isDragging,
    isActive,
    value,
    previousValue,
    hasFocus,
    // coordinates
    controlWidth: 0,
    rangeWidth: 0,
    rangeOffset: 0,
    clickOffset: 0,
    redrawOnUpdate: createStream.merge([isActive, value])
  };
};

export const onMount = vnode => {
  const dom = vnode.dom;
  const state = vnode.state;
  const attrs = vnode.attrs;

  state.trackEl = dom.querySelector(`.${classes.track}`);
  state.controlEl = dom.querySelector(`.${classes.control}`);
  state.pinEl = dom.querySelector(`.${classes.pin}`);
  if (attrs.pin) {
    setTimeout(() => {
      updatePinPosition(state);
    }, 0);
  }
};

export const createProps = (vnode, { keys: k }) => {
  const state = vnode.state;
  const attrs = vnode.attrs;
  if (attrs.value !== undefined) {
    if (state.previousValue() !== attrs.value) {
      state.previousValue(attrs.value);
      setTimeout(() => state.setValue(state.previousValue()), 0); // perform in next tick to play nice with React
    }
  }
  const hasTicks = attrs.ticks !== undefined && attrs.ticks !== false;
  const interactiveTrack = (attrs.interactiveTrack !== undefined) ? attrs.interactiveTrack : true;
  return Object.assign(
    {}, 
    filterSupportedAttributes(attrs),
    {
      className: [
        classes.component,
        attrs.disabled ? classes.isDisabled : null,
        attrs.pin ? classes.hasPin : null,
        interactiveTrack ? classes.hasTrack : null,
        state.isActive() ? classes.isActive : null,
        state.hasFocus() ? classes.hasFocus : null,
        state.fraction() === 0 ? classes.isAtMin : null,
        hasTicks ? classes.hasTicks : null,
        attrs.tone === "dark" ? "pe-dark-tone" : null,
        attrs.tone === "light" ? "pe-light-tone" : null,
        attrs.className || attrs[k.class],
      ].join(" ")
    }
  );
};

export const createContent = (vnode, { renderer: h, keys: k }) => {
  const attrs = vnode.attrs;
  const hasTicks = attrs.ticks !== undefined && attrs.ticks !== false;
  const interactiveTrack = (attrs.interactiveTrack !== undefined) ? attrs.interactiveTrack : true;
  return createSlider(vnode, { h, k, hasTicks, interactiveTrack });
};


