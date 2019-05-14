'use strict';

/* eslint-disable */
var flexTimeout;

var clearflexTimeout = function clearflexTimeout() {
  if (flexTimeout) {
    clearTimeout(flexTimeout);
  }
};

var startflexTimeout = function startflexTimeout(timeout, cb, e) {
  clearflexTimeout();
  flexTimeout = setTimeout(cb.bind(null, e), timeout);
};

var disableSelect = function disableSelect(el) {
  if (el) {
    el.style.webkitUserSelect = 'none';
    el.style.khtmlUserSelect = 'none';
    el.style.mozUserSelect = 'none';
    el.style.msUserSelect = 'none';
    el.style.userSelect = 'none';
  }
};

var vueFlexTouch = (function (_ref) {
  var _ref$timeout = _ref.timeout,
      timeout = _ref$timeout === void 0 ? 500 : _ref$timeout,
      _ref$isPc = _ref.isPc,
      isPc = _ref$isPc === void 0 ? true : _ref$isPc;
  return {
    bind: function bind(el, _ref2) {
      var value = _ref2.value;
      disableSelect(el);
      var callback = value;

      if (callback && typeof callback === 'function') {
        el._vue_touchstart = function (e) {
          e.preventDefault();
          startflexTimeout(timeout, callback, e);
        };

        el._vue_touchmove = function (e) {
          e.preventDefault();
          clearflexTimeout();
        };

        el._vue_touchend = function (e) {
          e.preventDefault();
          clearflexTimeout();
        };

        el._vue_mousedown = function (e) {
          e.preventDefault(); // 右键

          if (e.button === 2) {
            callback(e);
          }
        };

        el.addEventListener('touchstart', el._vue_touchstart);
        el.addEventListener('touchmove', el._vue_touchmove);
        el.addEventListener('touchend', el._vue_touchend);

        if (isPc) {
          el.addEventListener('mousedown', el._vue_mousedown);
          el.addEventListener('contextmenu', function (e) {
            e.preventDefault();
          });
        }
      }
    },
    unbind: function unbind(el) {
      el.removeEventListener('touchstart', el._vue_touchstart);
      el.removeEventListener('touchmove', el._vue_touchmove);
      el.removeEventListener('touchend', el._vue_touchend);

      if (isPc) {
        el.removeEventListener('mousedown', el._vue_mousedown);
      }
    }
  };
});

var install = function install(Vue) {
  var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  Vue.directive('flex-touch', vueFlexTouch(config));
};

var index = {
  install: install
};

module.exports = index;
