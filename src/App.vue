<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <a-button type="primary" icon="search">Button</a-button>
    <a-button type="primary" icon="download">Button</a-button>
    <div class="icons-list">
      <a-icon type="home" />
      <a-icon type="setting" theme="filled" />
      <a-icon type="smile" theme="outlined" />
      <a-icon type="sync" spin />
      <a-icon type="loading" />
    </div>
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'app',
  components: {
    HelloWorld
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
 .anticon {
  margin-right: 6px;
  font-size: 24px;
}
</style>
