import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state:{
        isLoggedIn: false,
        credentials: {},

    },
    mutations:{
        toggleLogin(state){
            state.isLoggedIn = !state.isLoggedIn;
        },
        // saveCredentials(state, returnedCreds){
        //     return state;
        // }
    },
    getters:{
        login: state => state.isLoggedIn
    }
})