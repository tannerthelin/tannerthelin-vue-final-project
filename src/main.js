import Vue from 'vue'
import App from './App.vue'

import store from './store';

Vue.config.productionTip = false;
Vue.prototype.$http = axios


new Vue({
  render: h => h(App),
  store
}).$mount('#app');

// console.log(store.state.currentGames);