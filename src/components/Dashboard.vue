<template>
  <div>
      <div class="top-container">
        <current-list></current-list>
        <activity-list></activity-list>
      </div>
      <logbook-list></logbook-list>
      <!-- <p>API Data: {{info.data.results[1].name}}</p> -->
  </div>
</template>

<script>
import HelloWorld from './HelloWorld.vue';
import CurrentList from './CurrentList.vue';
import ActivityList from './ActivityList.vue';
import LogbookList from './LogbookList.vue';
import {HeartRating} from 'vue-rate-it';

export default {
  name: 'app',
  components: {
    currentList: CurrentList,
    activityList: ActivityList,
    logbookList: LogbookList
  },
  data () {
    return {
      info: '',
      apikey: 'e8167be1f1aad46ac527f7acadbf16993a8d2008'
    }
  },
  created () {
    // axios
    //   .get('https://api.rawg.io/api/games')
    //   .then(response => (this.info = response))
  }
}
</script>

<style>

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

    .small {
      width: 16px;
      height: 40px;
      background-size: contain;
      display: block;
    }

    logbook-list {
      width: 960px;
    }
</style>
