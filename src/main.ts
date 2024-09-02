import { createApp } from 'vue'
import { createRouter, createMemoryHistory } from 'vue-router'
import './assets/styles/global.css'
import App from './App.vue'

import HomePage from './pages/HomePage.vue'


const routes = [
    { path: '/', component: HomePage },
    { path: '/convert', component: () => import("./pages/ConvertPage.vue") },
]

const router = createRouter({
    history: createMemoryHistory(),
    routes,
})

createApp(App)
    .use(router)
    .mount('#app')
