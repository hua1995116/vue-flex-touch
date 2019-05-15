/* eslint-disable */
import {isPc, disableSelect} from '../utils/helper';

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
  needSelect = false
}) => ({
  bind: (el, { value }) => {
    const callback = value;
    if(needSelect) {
      disableSelect(el);
    }

    if (callback && typeof callback === 'function') {
      el._vue_touchstart = (e) => {
        e.preventDefault();
        startflexTimeout(timeout, callback, e);
      };

      el._vue_touchmove = (e) => {
        e.preventDefault();
        clearflexTimeout();
      };

      el._vue_touchend = (e) => {
        e.preventDefault();
        clearflexTimeout();
      };

      el._vue_mousedown = (e) => {
        e.preventDefault();
        // 右键 right click
        if(e.button === 2) {
          callback(e);
        }
      }

      if(isPc()) {
        el.addEventListener('mousedown', el._vue_mousedown);
        el.addEventListener('contextmenu', (e) => {
          e.preventDefault();
        })
      } else {
        el.addEventListener('touchstart', el._vue_touchstart);
        el.addEventListener('touchmove', el._vue_touchmove);
        el.addEventListener('touchend', el._vue_touchend);
      }
    }
  },
  unbind: (el) => {
    if (isPc()) {
      el.removeEventListener('mousedown', el._vue_mousedown);
    } else {
      el.removeEventListener('touchstart', el._vue_touchstart);
      el.removeEventListener('touchmove', el._vue_touchmove);
      el.removeEventListener('touchend', el._vue_touchend);
    }
  },
});
