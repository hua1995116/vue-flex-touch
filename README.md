# vue-flex-touch

> vue-flex-touch both for long press touch on mobile and right click on pc

<p align="center">
    <a href="https://travis-ci.org/hua1995116/vue-flex-touch"><img src="https://travis-ci.org/hua1995116/vue-flex-touch.svg?branch=master" /></a>
    <a href="https://codecov.io/gh/hua1995116/vue-flex-touch"><img src="https://codecov.io/gh/hua1995116/vue-flex-touch/branch/master/graph/badge.svg" /></a>
    <a href="https://npmcharts.com/compare/vue-flex-touch?minimal=true" rel="nofollow"><img src="https://img.shields.io/npm/dm/vue-flex-touch.svg" style="max-width:100%;"></a>
    <a href="https://www.npmjs.com/package/vue-flex-touch" rel="nofollow"><img src="https://img.shields.io/npm/v/vue-flex-touch.svg" style="max-width:100%;"></a>
    <a href="https://www.npmjs.com/package/vue-flex-touch" rel="nofollow"><img src="https://img.shields.io/npm/l/vue-flex-touch.svg?style=flat" style="max-width:100%;"></a>
</p>

# Install
```shell
npm install vue-flex-touch
```


# Usage
```javascript

// main
import flexTouch from 'vue-flex-touch'

Vue.use(flexTouch, { timeout: 900 });

// component
<div id="app" v-flex-touch="handleTouch">
  <h1>I'm flex touch demo</h1>
  {{flex}}
</div>


data() {
  return {
    flex: false
  };
},
methods: {
  handleTouch() {
    this.flex = !this.flex;
  }
}


```

# Interface

# reference


# License

MIT

Copyright (c) 2019 蓝色的秋风