import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home";
import About from "@/views/About";
import Manage from "@/views/Manage";

import store from "@/store";

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
        meta: { requiresAuth: true },
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
    if (!to.matched.some(record => record.meta.requiresAuth)) {
        next();
    }

    if (store.state.isLoggedIn) {
        next();
    } else {
        next({ name: "home" });
    }

});

export default router;
