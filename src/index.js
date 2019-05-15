/* eslint-disable */
import vueFlexTouch from './directives/long-touch';

const install = (Vue, config = {}) => {
  Vue.directive('flex-touch', vueFlexTouch(config));
};

export default {
  install,
};