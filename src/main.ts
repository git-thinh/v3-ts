import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'

// import routes from '~pages'
import { setupLayouts } from 'virtual:generated-layouts'
import generatedRoutes from 'virtual:generated-pages'
const routes = setupLayouts(generatedRoutes)
const router = createRouter({ history: createWebHistory(), routes})

import App from './App.vue'
const app = createApp(App);

//import { createPage } from "./createPage.ts";
//const app = createApp({ render: () => createPage() });

app.use(router)
app.mount(document.body);