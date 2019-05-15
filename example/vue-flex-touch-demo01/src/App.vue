<template>
  <div id="app" v-flex-touch="handleTouch">
    <h1>I'm flex touch demo</h1>
    {{flex}}
  </div>
</template>

<script>
export default {
  name: "App",
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
</style>
