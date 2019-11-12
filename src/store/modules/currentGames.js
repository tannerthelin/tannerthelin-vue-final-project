import games from '../../data/games';

const state =  {
    games: []
};

const mutations = {
    'SET_GAMES' (state, games) {
        state.games = games;
    }
};

const actions = {
    completeGame: ({ commit }, order) => {
        commit();
    },
    initGames: ({ commit }) => {
        commit('SET_GAMES', games);
    }
};

const getters = {
    games: state => {
        return state.games;
    }
};

export default {
    state,
    mutations,
    actions,
    getters
};