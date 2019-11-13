import games from '../../data/loggedGames';

const state =  {
    games: []
};

const mutations = {
    'SET_LOGGED_GAMES' (state, games) {
        state.games = games;
    }
};

const actions = {
    initLoggedGames: ({ commit }) => {
        commit('SET_LOGGED_GAMES', games);
    }
};

const getters = {
    loggedGames: state => {
        return state.games;
    }
};

export default {
    state,
    mutations,
    actions,
    getters
};