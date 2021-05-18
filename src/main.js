import { createApp } from 'vue'
import App from './App.vue'
import { Select, Tree } from 'element-ui'
createApp.use(Select)
createApp.use(Tree)
createApp(App).mount('#app')
