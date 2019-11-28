import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
// import router from './router'
Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        currentGames: [
            {id: 3328, title:'Loading...', numberOfDays: 5, rating: 0, bgImage: 'url(./assets/images/placeholder-small.png)'},
            {id: 41494, title:'Loading...', numberOfDays: 12, rating: 0, bgImage: 'url(./assets/images/placeholder-small.png)'},
            {id: 59637, title:'Loading...', numberOfDays: 24, rating: 0, bgImage: 'url(./assets/images/placeholder-small.png)'},
        ],
        loggedGames: [
            {id: 59637, title:'Loading...', finished: 'Jan 8, 2020', rating: 0, bgImage: 'url(./assets/images/placeholder-large.png)'},
            {id: 41494, title:'Loading...', finished: 'Jan 8, 2020', rating: 0, bgImage: 'url(./assets/images/placeholder-large.png)'},
            // {title:"Hollow Knight", finished: 'Jan 1, 2020', rating: 2},
            // {title:"Modern Warfare", finished: 'Dec 26, 2019', rating: 3},
            // {title:"Fortnite", finished: 'Nov 20, 2019', rating: 1},
            // {title:"Celeste", finished: 'Nov 14, 2019', rating: 4},
            // {title:"Destiny 2", finished: 'Nov 9, 2019', rating: 4},
            // {title:"Link's Awaken...", finished: 'Nov 1, 2019', rating: 5},
            // {title:"Borderlands 3", finished: 'Oct 23, 2019', rating: 3}
        ],
        activity: [],
        user: {
            name: '',
            email: '',
            address: ''
        }
    },
    mutations: {
        'DELETE_GAME' (state, payload) {
            let index = state.currentGames.indexOf(payload);
            state.currentGames.splice(index, 1);
            state.activity.push("You deleted " + payload.title + " from your Currently Playing.");
        },
        'COMPLETE_GAME' (state, payload) {
            let index = state.currentGames.indexOf(payload);

            // Remove game from the "Current" list
            state.currentGames.splice(index, 1);
            
            // Get current date
            var date = new Date();

            // Convert date to simpler format
            var month = date.toLocaleString("en-US", { month: 'short' });
            // var currentDate = date.getDate() + ' ' + month + ' ' + date.getFullYear();
            var currentDate =  month + ' ' + date.getDate() + ", " + date.getFullYear();

            // Set date
            payload.finished = currentDate;

            // Add game to the logbook
            state.loggedGames.unshift(payload);

            // Push the event to the Activity log
            state.activity.push("You marked " + payload.title + " as completed.");
        },
        'MODIFY_GAME' (state, payload) {
            let oldTitle = payload.title;
            var newTitle = '';
            axios
            .get('https://api.rawg.io/api/games/' + payload.id)
            .then(response => {
                newTitle = response.data.name;
                payload.bgImage = response.data.background_image;
                payload.title = newTitle; 
                console.log(oldTitle + " changed to "+ newTitle + ".");     
            })
            .catch(error => {
                console.log(error)
            });

            // return payload;                
        }
    },
    actions: {
        deleteGame(context, game) {
            context.commit("DELETE_GAME", game);
          },
        completeGame(context, game) {
            context.commit("COMPLETE_GAME", game);
        },
        modifyGame(context, game) {
            context.commit('MODIFY_GAME', game);
        }
    },
    getters: {
        getCurrent: state => {
            return state.currentGames
        },
        getLogged: state => {return state.loggedGames},
        getActivity: state => {return state.activity},
    }
});