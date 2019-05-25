import flexTouch from "../../src/index";
import Vue from 'vue/dist/vue.esm.browser';

function triggerTouchEvent(el, eventType) {
  // 获取目标元素的坐标、大小
  // https://bruceking.site/2017/07/21/how-to-trigger-touch-event-at-browser/
  var rect = el.getBoundingClientRect();
  console.log(rect);
  // 构建touch对象
  var touch = new Touch({
      identifier: Date.now(),
      target: el,
      clientX: rect.left + rect.width/2,
      clientY: rect.top + rect.height/2,
      // 下面的都是W3C实验性质的API
      radiusX: 2.5,
      radiusY: 2.5,
      rotationAngle: 10,
      force: 0.5
  });
  // 构建TouchEvent
  var touchEvent = new TouchEvent(eventType, {
      cancelable: true,
      bubbles: true,
      touches: [touch],
      targetTouches: [],
      changedTouches: [touch]
  });
  el.dispatchEvent(touchEvent);
}


function triggeright(element) {
  // https://stackoverflow.com/questions/7914684/trigger-right-click-using-pure-javascript
  var ev1 = new MouseEvent("mousedown", {
    bubbles: true,
    cancelable: false,
    view: window,
    button: 2,
    buttons: 2,
    clientX: element.getBoundingClientRect().x,
    clientY: element.getBoundingClientRect().y
});
element.dispatchEvent(ev1);
}

const createVM = () => {
  let template = `
<div class="app" v-flex-touch="handleTouch">
  <h1>I'm flex touch demo</h1>
  {{count}}
</div>`;
  const body = document.querySelector('body');
  const element = document.createElement('div');
  element.id = 'app';
  body.appendChild(element);
  Vue.use(flexTouch, {timeout: 300});
  return new Vue({
    el: '#app',
    data() {
      return {
        count: 0,
      };
    },
    template,
    methods: {
      handleTouch() {
        this.count = this.count + 1;
        console.log('loaded!');
      }
    }
  })
}

describe(`flex test`, () => {
  let vm;

  beforeEach(done =>{
    vm = createVM();
    vm.$mount();

    vm.$nextTick(() => {
      spyOn(vm, 'handleTouch')

      const element = document.querySelector('.app');

      triggeright(element);

      setTimeout(done, 2 * 1000);
    });
  });

  it('test right click', () => {
    expect(vm.count).toEqual(1);
  });

})