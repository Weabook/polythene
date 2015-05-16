define([
    'polythene/polythene/polythene',
    'mithril',
    'css!./toolbar'
], function(
    p,
    m
) {
    'use strict';

    var bar,
        barWrapper,
        createView;

    barWrapper = function(className, content) {
        return m('div[center][horizontal][layout]', {
            class: ['toolbar-tools', className].join(' ')
        }, content);
    };

    bar = function(opts) {
        var bars = [];
        if (opts.content) {
            bars.push(barWrapper('topBar', opts.content));
        } else {
            if (opts.topBar) {
                bars.push(barWrapper('topBar', opts.topBar));
            }
            if (opts.middleBar) {
                bars.push(barWrapper('middleBar', opts.middleBar));
            }
            if (opts.bottomBar) {
                bars.push(barWrapper('bottomBar', opts.bottomBar));
            }
        }
        return bars;
    };

    createView = function(ctrl, opts) {
        var tag, props, content;
        opts = opts || {};

        tag = opts.tag || 'div';
        props = {
            class: ['toolbar animate', (opts.mode || 'standard'), opts.class].join(' '),
            config: opts.config
        };
        content = bar(opts);

        return m(tag, props, p.insertContent(content, opts));
    };

    return {
        controller: function() {
            return {
                view: m.prop()
            };
        },
        view: function(ctrl, opts) {
            var view;
            opts = opts || {};
            view = ctrl.view();
            if (view && opts.cache) {
                return view;
            }
            view = createView(ctrl, opts);
            if (opts.cache) ctrl.view(view);
            return view;
        }
    };
});