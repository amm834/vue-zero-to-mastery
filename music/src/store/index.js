import { createStore } from "vuex";

export default createStore({
    state: {
        authModalShow: false,
        isLoggedIn: false
    },
    mutations: {
        toggleAuthModal(state) {
            state.authModalShow = !state.authModalShow;
        },
        toggleAuth(state) {
            state.isLoggedIn = !state.isLoggedIn;
        }
    },
    getters: {
        // authModalShow: state => state.authModalShow
    }
});
