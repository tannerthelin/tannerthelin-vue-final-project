import games from '../../data/games';
import loggedGames from '../../data/loggedGames';
import activity from '../../data/activity';

const state =  {
    games: []
};

const mutations = {
    'INIT_GAMES' (state, games) {
        state.games = games;
    },
    'ADD_GAME': (state, payload) => {

        var newGame = {
            id: payload.newId,
            task: payload.task,
            completed: false
        }

        state.loggedGames.unshift(newGame);
    },
    'DELETE_GAME': (state, payload) => {
        // var index = state.games.find(game => game.id == payload);
        var index = state.games.find(game => game.id === payload);
        // let index = state.games.map(game => game.id).indexOf(payload.id);
        // for (i = 0; i < cars.length; i++) {
        //     if (games.id === payload) {
                
        //     }
        // }
        state.games.splice(games, 1)
    }
};

const actions = {
    initGames: ({commit}) => {
        commit('INIT_GAMES', games);
    },
    addGame: (context, payload) => {
        context.commit("ADD_GAME", payload)
    },
    deleteGame: (context, payload) => {
        context.commit("DELETE_GAME", payload.target)
        console.log(payload);
        console.log(games);
    }
};

const getters = {
    games: state => {return state.games;}
};

export default {
    state,
    mutations,
    actions,
    getters
};