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
        // alias: "/manage",
        path: "/manage-music",
        component: Manage,
        beforeEnter: (to, from, next) => {
            console.log("BeforeEnter");
            next();
        }
    },
    {
        path: "/manage",
        redirect: { name: "manage" }
    },
    {
        path: "/:catchAll(.*)*",
        redirect: { name: "home" }
    }
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
    linkExactActiveClass: "text-yellow-500"
});

router.beforeEach((to, from, next) => {
    console.log("Global guard");
    next()
});

export default router;
