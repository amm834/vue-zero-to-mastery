import About from "../components/About.vue";
import Home from "../components/Home.vue";
import { createRouter } from "vue-router";
import { createWebHistory } from "vue-router";

const routes = [
    {
        path: "/",
        name: "home",
        component: Home,
    },
    {
        path: "/about/:member",
        component: About,
    },
];
export default createRouter({
    history: createWebHistory(),
    routes,
});
