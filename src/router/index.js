import { createWebHistory, createRouter } from "vue-router";
import Home from "@/views/Home.vue";
import About from "@/views/About.vue";
import Products from "@/views/Products.vue";

const routes = [
    {
        path: "/",
        name: "Home",
        component: Home,
    },
    {
        path: "/sobre",
        name: "About",
        component: About
    },
    {
        path: "/produtos",
        name: "Products",
        component: Products
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;