import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./assets/tailwind.css";
import "./assets/main.css";
import VeeValidate from "./includes/validate";
import "./includes/firebase";

const app = createApp(App);

app.use(store);
app.use(router);
app.use(VeeValidate);
app.mount("#app");
