<template>
  <div id="app">
    <app-header></app-header>
    <div class="content-container">
      <div class="top-container">
        <current-list></current-list>
        <activity-list></activity-list>
      </div>
      <logbook-list></logbook-list>
    </div>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue';
import Header from './components/Header.vue';
import CurrentList from './components/CurrentList.vue';
import ActivityList from './components/ActivityList.vue';
import LogbookList from './components/LogbookList.vue';

export default {
  name: 'app',
  components: {
    appHeader: Header,
    currentList: CurrentList,
    activityList: ActivityList,
    logbookList: LogbookList

  }
}
</script>

<style>
  @import url('https://rsms.me/inter/inter.css');

  #app {
    font-family: 'Inter', sans-serif; 
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    background-color: #F9F9FA;
    padding-bottom: 240px;
    min-height: 100vh;
    border: 15px solid white;
  }

  body, html {
    height: 100%;
    margin: 0px;
    font-size: 16px;
  }

  h2 {
        font-size: 16px;
        font-weight: 400;
        color: black;
        letter-spacing: 0.36px;
        margin: 0px;
    }

  h3 {
    font-size: 14px;
    font-weight: 400;
    color: #818181;
  }

  .content-container {
    max-width: 960px;
    margin: auto;
  }

  .top-container {
    display: flex;
    justify-content: space-between;
  }

  .list-container {
    height: 575px;
    background-color: #F6F6F6;
    border: 1px solid #E7E7E8;
    border-radius: 4px;
    padding: 16px;
  }

  .flex-grow {
    width: 50%;
    padding: 12px;
  }

  .menu-dots {
        background-image: url("./assets/images/menu-dots.svg");
        background-position: center;
        width: 32px;
        height: 32px;
        background-repeat: no-repeat;
        display: inline-block;
        cursor: pointer;
        z-index: 3;
    }

    .menu-dots:hover {
        background-image: url("./assets/images/menu-dots-black.svg");
    }

    .small {
      width: 16px;
      height: 40px;
      background-size: contain;
      display: block;
    }
</style>
