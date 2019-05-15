<template>
  <div id="app">
    <h1 v-flex-touch="handleTouch">right click me (pc) or long touch me (mobile)</h1>
    <div class="list" :style="style">
      <div class="li">@小明</div>
      <div class="li">发送消息</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      style: {
        display: "none"
      }
    };
  },
  mounted() {
    const _this = this;
    document.addEventListener("click", function(e) {
      console.log(e);
      if (e.target.classList !== "list") {
        _this.style = {
          display: "none"
        };
      }
    });
  },
  methods: {
    handleTouch(e) {
      let left = '';
      let top = '';
      if(e.changedTouches) {
        left = e.changedTouches[0].clientX;
        top = e.changedTouches[0].clientY;
      } else {
        left = e.offsetX;
        top = e.offsetY;
      }
      this.style = {
        display: "block",
        left: left + "px",
        top: top + "px"
      };
    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.list {
  width: 150px;
  background: #fff;
  position: absolute;
  border: 1px solid #ddd;
}

.li {
  margin-bottom: 5px;
}

.li:first-child {
  border-bottom: 1px solid #ddd;
}
</style>
