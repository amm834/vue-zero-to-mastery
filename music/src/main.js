import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./assets/tailwind.css";
import "./assets/main.css";
import VeeValidate from "./includes/validate";
import { auth } from "@/includes/firebase";


let app = null;
auth.onAuthStateChanged(() => {
    if (!app) {
        app = createApp(App);

        app.use(store);
        app.use(router);
        app.use(VeeValidate);
        app.mount("#app");

    }
});

