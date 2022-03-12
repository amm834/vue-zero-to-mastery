import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home";
import About from "@/views/About";
import Manage from "@/views/Manage";

const routes = [
    {
        name: "home",
        path: "/",
        component: Home
    },
    {
        name: "about",
        path: "/about",
        component: About
    },
    {
        name: "manage",
        path: "/manage",
        component: Manage
    }
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
    linkExactActiveClass: "text-yellow-500"
});

export default router;
