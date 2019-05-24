# vue-flex-touch

> A Vue.js directive both for long press touch on mobile and right click on pc

<p align="center">
    <a href="https://travis-ci.org/hua1995116/vue-flex-touch"><img src="https://travis-ci.org/hua1995116/vue-flex-touch.svg?branch=master" /></a>
    <a href="https://npmcharts.com/compare/vue-flex-touch?minimal=true" rel="nofollow"><img src="https://img.shields.io/npm/dm/vue-flex-touch.svg" style="max-width:100%;"></a>
    <a href="https://www.npmjs.com/package/vue-flex-touch" rel="nofollow"><img src="https://img.shields.io/npm/v/vue-flex-touch.svg" style="max-width:100%;"></a>
    <a href="https://www.npmjs.com/package/vue-flex-touch" rel="nofollow"><img src="https://img.shields.io/npm/l/vue-flex-touch.svg?style=flat" style="max-width:100%;"></a>
</p>

# Demo

https://n0v3orw484.codesandbox.io/

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

# Examle

## base use

<img width="300" src="pic/2019-05-15&#32;19.28.11.gif"/>

[![Edit Vue Template](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/n0v3orw484?fontsize=14)

## used in chat '@'

<img width="300" src="pic/2019-05-15&#32;21.56.46.gif">

[![Edit Vue Template](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/oovv1q83zz?fontsize=14)

# Options

|  Prop     |  Type     |   default    | description      |
|  ---  |  ---  |  ---  |  ---  |
|   timeout   |  number     | 500      | time for long touch. (only mobile)   |
|   needSelect    |  boolean     |  false     | If it is true, will select text      |
|   preventDefault    |  boolean     |  true     | If it is true, will stop default event)      |

# API

```
vue-flex-touch="handleTouch"

handleTouch(e, type) => void
```

Arguements:

- **e** `{Object}` event callback
- **type** `'touch'|'rightClick'` enum type

# License

MIT

Copyright (c) 2019 蓝色的秋风