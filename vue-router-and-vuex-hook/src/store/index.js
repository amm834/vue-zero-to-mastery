import { createStore } from "vuex";

export default createStore({
    state: {
        isAllowed: false,
    },
    mutations: {
        allowNext(state, payload) {
            state.isAllowed = payload;
        },
    },
    getters: {
        isAllowed: (state) => state.isAllowed,
    },
});
