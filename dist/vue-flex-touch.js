var vueFlexTouch = (function () {
  'use strict';

  var isApp = function isApp() {
    return /Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent);
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

  var vueFlexTouch = (function (_ref) {
    var _ref$timeout = _ref.timeout,
        timeout = _ref$timeout === void 0 ? 500 : _ref$timeout,
        _ref$needSelect = _ref.needSelect,
        needSelect = _ref$needSelect === void 0 ? false : _ref$needSelect,
        _ref$preventDefault = _ref.preventDefault,
        preventDefault = _ref$preventDefault === void 0 ? true : _ref$preventDefault;
    return {
      bind: function bind(el, _ref2) {
        var value = _ref2.value;
        var callback = value;

        if (needSelect) {
          disableSelect(el);
        }

        if (callback && typeof callback === 'function') {
          el._vue_touchstart = function (e) {
            preventDefault && e.preventDefault();
            startflexTimeout(timeout, callback, e);
          };

          el._vue_touchmove = function (e) {
            preventDefault && e.preventDefault();
            clearflexTimeout();
          };

          el._vue_touchend = function (e) {
            preventDefault && e.preventDefault();
            clearflexTimeout();
          };

          el._vue_mousedown = function (e) {
            e.preventDefault(); // 右键 right click

            if (e.button === 2) {
              callback(e);
            }
          };

          if (isApp()) {
            el.addEventListener('touchstart', el._vue_touchstart);
            el.addEventListener('touchmove', el._vue_touchmove);
            el.addEventListener('touchend', el._vue_touchend);
          } else {
            console.log(11);
            el.addEventListener('mousedown', el._vue_mousedown);
            el.addEventListener('contextmenu', function (e) {
              e.preventDefault();
            });
          }
        }
      },
      unbind: function unbind(el) {
        if (isApp()) {
          el.removeEventListener('touchstart', el._vue_touchstart);
          el.removeEventListener('touchmove', el._vue_touchmove);
          el.removeEventListener('touchend', el._vue_touchend);
        } else {
          el.removeEventListener('mousedown', el._vue_mousedown);
        }
      }
    };
  });

  /* eslint-disable */

  var install = function install(Vue) {
    var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    Vue.directive('flex-touch', vueFlexTouch(config));
  };

  var index = {
    install: install
  };

  return index;

}());
