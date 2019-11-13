import activity from '../../data/activity';

const state =  {
    activity: []
};

const mutations = {
    'SET_ACTIVITY' (state, activity) {
        state.activity = activity;
    }
};

const actions = {
    initActivity: ({ commit }) => {
        commit('SET_ACTIVITY', activity);
    }
};

const getters = {
    loggedActivity: state => {
        return state.activity;
    }
};

export default {
    state,
    mutations,
    actions,
    getters
};