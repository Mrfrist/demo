import { createApp } from 'vue'
import App from './App.vue'
// import router from'./router';
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css';
import * as Icons from '@ant-design/icons-vue'
const app = createApp(App)
// app.use(router)
app.use(Antd)
app.mount('#app')
app.config.globalProperties.$icons = Icons
for (const key in Icons) {
    app.component(key, Icons[key])
}