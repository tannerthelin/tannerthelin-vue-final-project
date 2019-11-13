import Vue from 'vue';
import Vuex from 'vuex';

import currentGames from './modules/currentGames';
import loggedGames from './modules/logbook';
import activity from './modules/activity';

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        currentGames,
        loggedGames,
        activity
    }
});