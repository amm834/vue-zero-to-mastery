import { createStore } from "vuex";
import { doc, setDoc } from "firebase/firestore";
import { db } from "@/includes/firebase";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";


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
    },
    actions: {
        async register({ commit }, payload) {
            const credential = await createUserWithEmailAndPassword(getAuth(), payload.email, payload.password);
            await setDoc(doc(db, "users", credential.user.uid), {
                name: payload.name,
                email: payload.email,
                password: payload.password,
                country: payload.country,
                age: payload.age
            });
            commit("toggleAuth");
        },
        init_login({ commit }) {
            const user = getAuth().currentUser;
            if (user) {
                commit("toggleAuth");
            }
        },
        async login({ commit }, payload) {
            await signInWithEmailAndPassword(getAuth(), payload.email, payload.password);
            commit("toggleAuth");
        },
        async logout({ commit }, { payload }) {
            await signOut(getAuth());
            commit("toggleAuth");

            if (payload.route.meta.requiresAuth) {
                payload.router.push({ name: "home" });
            }
        }
    }
});
