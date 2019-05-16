import Vue from 'vue';

declare type VueOptions = {
  timeout?: number,
  needSelect?: boolean,
  preventDefault?: boolean
}

declare function install(vue: typeof Vue, options?: VueOptions): void

declare class VueFlexTouch extends Vue {}

declare const _default: {
  install: typeof install
}

export default _default