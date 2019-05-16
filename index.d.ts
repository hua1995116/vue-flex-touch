import Vue from 'vue';

export declare type VueOptions = {
  timeout?: number,
  needSelect?: boolean,
  preventDefault?: boolean
}

declare function install(vue: typeof Vue, options?: VueOptions): void

declare const _default: {
  install: typeof install
}

export default _default