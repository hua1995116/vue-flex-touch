/* eslint-disable */
import {isApp, disableSelect} from '../utils/helper';

let flexTimeout;

const clearflexTimeout = () => {
  if (flexTimeout) {
    clearTimeout(flexTimeout);
  }
};

const startflexTimeout = (timeout, cb, e) => {
  clearflexTimeout();
  flexTimeout = setTimeout(cb.bind(null, e), timeout);
};

export default ({
  timeout = 500,
  needSelect = false,
  preventDefault = true,
}) => ({
  bind: (el, { value }) => {
    const callback = value;
    if(needSelect) {
      disableSelect(el);
    }

    if (callback && typeof callback === 'function') {
      el._vue_touchstart = (e) => {
        preventDefault && e.preventDefault();
        startflexTimeout(timeout, callback, e);
      };

      el._vue_touchmove = (e) => {
        preventDefault && e.preventDefault();
        clearflexTimeout();
      };

      el._vue_touchend = (e) => {
        preventDefault && e.preventDefault();
        clearflexTimeout();
      };

      el._vue_mousedown = (e) => {
        e.preventDefault();
        // 右键 right click
        if(e.button === 2) {
          callback(e);
        }
      }
      if(isApp()) {
        el.addEventListener('touchstart', el._vue_touchstart);
        el.addEventListener('touchmove', el._vue_touchmove);
        el.addEventListener('touchend', el._vue_touchend);
      } else {
        console.log(11);
        el.addEventListener('mousedown', el._vue_mousedown);
        el.addEventListener('contextmenu', (e) => {
          e.preventDefault();
        })
      }
    }
  },
  unbind: (el) => {
    if (isApp()) {
      el.removeEventListener('touchstart', el._vue_touchstart);
      el.removeEventListener('touchmove', el._vue_touchmove);
      el.removeEventListener('touchend', el._vue_touchend);
    } else {
      el.removeEventListener('mousedown', el._vue_mousedown);
    }
  },
});
