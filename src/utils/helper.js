export const isPc = () => {
  return /Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent);
};

export const disableSelect = (el) => {
  if (el) {
    el.style.webkitUserSelect = 'none';
    el.style.khtmlUserSelect = 'none';
    el.style.mozUserSelect = 'none';
    el.style.msUserSelect = 'none';
    el.style.userSelect = 'none';
  }
};