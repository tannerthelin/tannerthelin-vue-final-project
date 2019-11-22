import Vue from 'vue'
import Vuex from 'vuex'
// import router from './router'
Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        currentGames: [
            {title:"Untitled Goose Game", numberOfDays: 5, rating: 0},
            {title:"Hollow Knight", numberOfDays: 12, rating: 0},
            {title:"Modern Warfare", numberOfDays: 24, rating: 0},
        ],
        loggedGames: [
            {title:"Untitled Goos...", finished: 'Jan 8, 2020', rating: 3},
            {title:"Hollow Knight", finished: 'Jan 1, 2020', rating: 2},
            {title:"Modern Warfare", finished: 'Dec 26, 2019', rating: 3},
            {title:"Fortnite", finished: 'Nov 20, 2019', rating: 1},
            {title:"Celeste", finished: 'Nov 14, 2019', rating: 4},
            {title:"Destiny 2", finished: 'Nov 9, 2019', rating: 4},
            {title:"Link's Awaken...", finished: 'Nov 1, 2019', rating: 5},
            {title:"Borderlands 3", finished: 'Oct 23, 2019', rating: 3}
        ],
        activity: [],
        user: {
            name: '',
            email: '',
            address: ''
        }
    },
  getters: {
    getCurrent: state => {return state.currentGames},
    getLogged: state => {return state.loggedGames},
    getActivity: state => {return state.activity},
  }
});