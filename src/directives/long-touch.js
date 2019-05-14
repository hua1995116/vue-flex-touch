/* eslint-disable */
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

const disableSelect = (el) => {
  if (el) {
    el.style.webkitUserSelect = 'none';
    el.style.khtmlUserSelect = 'none';
    el.style.mozUserSelect = 'none';
    el.style.msUserSelect = 'none';
    el.style.userSelect = 'none';
  }
};

export default ({
  timeout = 500,
  isPc = true
}) => ({
  bind: (el, { value }) => {
    disableSelect(el);
    const callback = value;
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
        // 右键
        if(e.button === 2) {
          callback(e);
        }

      }

      el.addEventListener('touchstart', el._vue_touchstart);
      el.addEventListener('touchmove', el._vue_touchmove);
      el.addEventListener('touchend', el._vue_touchend);

      if(isPc) {
        el.addEventListener('mousedown', el._vue_mousedown);
        el.addEventListener('contextmenu', (e) => {
          e.preventDefault();
        })
      }
    }
  },
  unbind: (el) => {
    el.removeEventListener('touchstart', el._vue_touchstart);
    el.removeEventListener('touchmove', el._vue_touchmove);
    el.removeEventListener('touchend', el._vue_touchend);
    if (isPc) {
      el.removeEventListener('mousedown', el._vue_mousedown);
    }
  },
});
