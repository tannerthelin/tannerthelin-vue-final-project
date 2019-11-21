import Vue from 'vue'
import Vuex from 'vuex'
// import router from './router'
Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        currentGames: [
            {id: 1, title:"Untitled Goose Game", numberOfDays: 5},
            {id: 2, title:"Hollow Knight", numberOfDays: 12},
            {id: 3, title:"Modern Warfare", numberOfDays: 24},
        ],
        loggedGames: [
            {id: 1, title:"Untitled Goos...", finished: 'Jan 8, 2020', rating: 3},
            {id: 2, title:"Hollow Knight", finished: 'Jan 1, 2020', rating: 2},
            {id: 3, title:"Modern Warfare", finished: 'Dec 26, 2019', rating: 3},
            {id: 4, title:"Fortnite", finished: 'Nov 20, 2019', rating: 1},
            {id: 5, title:"Celeste", finished: 'Nov 14, 2019', rating: 4},
            {id: 6, title:"Destiny 2", finished: 'Nov 9, 2019', rating: 4},
            {id: 7, title:"Link's Awaken...", finished: 'Nov 1, 2019', rating: 5},
            {id: 8, title:"Borderlands 3", finished: 'Oct 23, 2019', rating: 3}
        ],
        activity: [
            "Deleted 'Breath of the Wild' from your Currently Playing", 
            "Added 'Untitled Goose Game' to your Currently Playing",
            "Added 'Hollow Knight' to your Currently Playing"
        ],
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