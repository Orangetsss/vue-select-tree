import { createApp } from 'vue'
import App from './App.vue'
import { ElSelect, ElOption, ElTree, ElIcon } from 'element-plus'
const app = createApp(App)

app.component(ElSelect.name, ElSelect)
app.component(ElOption.name, ElOption)
app.component(ElTree.name, ElTree)
app.component(ElIcon.name, ElIcon)

app.mount('#app')
  
