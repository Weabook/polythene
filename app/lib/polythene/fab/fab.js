define(["polythene/polythene/polythene","mithril","polythene/icon-button/icon-button","css!./fab"],function(e,n,i){"use strict";var t;return t=function(e,t){return t=t||{},t.parentClass=["fab",t.mini?"mini":null].join(" "),t.raised=!0,t.ripple={center:!0,opacityDecayVelocity:.24,cache:!0},t.shadow={increase:5},t.ink=!0,t.wash=!0,n.component(i,t)},{controller:function(){return{view:n.prop()}},view:function(e,n){var i;return n=n||{},i=e.view(),i&&n.cache?i:(i=t(e,n),n.cache&&e.view(i),i)}}});