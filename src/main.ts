import { createApp } from 'vue'
//import App from './App.vue'
//createApp(App).mount('#app')

import { createRouter, createWebHistory } from 'vue-router'
import routes from '~pages'
// eslint-disable-next-line no-console
console.log('vue:', routes)
const router = createRouter({
  history: createWebHistory(),
  routes,
})


import { createPage } from "./createPage.ts";
const app = createApp({
	render: () => createPage()
});


app.use(router)
app.mount(document.body);