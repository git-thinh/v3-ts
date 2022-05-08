import { createApp } from 'vue'
//import App from './App.vue'
//createApp(App).mount('#app')

import { createPage } from "./createPage.ts";
const app = createApp({
	render: () => createPage()
});
app.mount(document.body);