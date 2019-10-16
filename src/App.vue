<template>
  <div id="app">
    <app-header></app-header>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue';
import Header from './components/Header.vue';

export default {
  name: 'app',
  components: {
    appHeader: Header,
  }
}
</script>

<style>
@import url('https://rsms.me/inter/inter.css');

#app {
  font-family: 'Inter', sans-serif; 
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

body, html {
  height: 100%;
  margin: 0px;
  font-size: 16px;
}

.border-container {
  background-color: #f9f9fa;
  border: 15px solid white;
  margin: 0px;
  box-sizing: border-box;
  height: 100%;
}
</style>
