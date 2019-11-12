import Vue from 'vue';
import Vuex from 'vuex';

import currentGames from './modules/currentGames';

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        currentGames
    }
});