import HomePage from "./HomePage.vue";

export default [
    { path: '/', component: HomePage },
    { path: '/convert', component: () => import("../pages/ConvertPage.vue") },
]