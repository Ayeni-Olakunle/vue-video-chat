import { createRouter, createWebHistory } from "vue-router";
import ToolsView from "../views/Tools.vue";

const routes = [
    {
        path: "/",
        name: "tools",
        component: ToolsView,
    },
    {
        path: "/projects",
        name: "projects",
        component: () =>
            import(/* webpackChunkName: "about" */ "../views/Projects.vue"),
    },
    {
        path: "/channels",
        name: "channels",
        component: () =>
            import(/* webpackChunkName: "about" */ "../views/Channels.vue"),
    },
    {
        path: "/contacts",
        name: "contacts",
        component: () =>
            import(/* webpackChunkName: "about" */ "../views/Contacts.vue"),
    },
    {
        path: "/analytics",
        name: "analytics",
        component: () =>
            import(/* webpackChunkName: "about" */ "../views/Analytics.vue"),
    },
    {
        path: "/settings",
        name: "settings",
        component: () =>
            import(/* webpackChunkName: "about" */ "../views/Settings.vue"),
    },
    {
        path: "/livepreview",
        name: "livepreview",
        component: () =>
            import(/* webpackChunkName: "about" */ "../views/LivePreview.vue"),
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;
