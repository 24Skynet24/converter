import { createApp } from 'vue'
import { createRouter, createMemoryHistory } from 'vue-router'
import { createPinia } from 'pinia'

import './styles/global.scss'

import App from './App.vue'
import routes from "./pages/routes";

const router = createRouter({
    history: createMemoryHistory(),
    routes,
})
const pinia = createPinia()
const app = createApp(App)

app.use(router)
app.use(pinia)
app.mount('#app')
