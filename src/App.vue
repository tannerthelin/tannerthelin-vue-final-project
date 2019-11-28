<template>
  <div id="app">
    <app-header></app-header>
    <div class="content-container">
      <router-view></router-view>
    </div>
    <app-footer></app-footer>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue';
import Header from './components/Header.vue';
import CurrentList from './components/CurrentList.vue';
import ActivityList from './components/ActivityList.vue';
import LogbookList from './components/LogbookList.vue';
import Footer from './components/Footer.vue';
import {HeartRating} from 'vue-rate-it';

export default {
  name: 'app',
  components: {
    appHeader: Header,
    // currentList: CurrentList,
    // activityList: ActivityList,
    // logbookList: LogbookList,
    appFooter: Footer
  },
  data () {
    return {
      info: '',
      apikey: 'e8167be1f1aad46ac527f7acadbf16993a8d2008'
    }
  },
  created () {
    // this.$store.dispatch("modifyGame", this.game);
  }
}
</script>

<style>
  @import url('https://rsms.me/inter/inter.css');

  #app {
    font-family: 'Inter', sans-serif; 
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2D2D2D;
    background-color: #F9F9FA;
    min-height: 100vh;
    border: 15px solid white;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
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
    width: 960px;
    margin: auto;
  }
</style>
