import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

// 自动按需引入、无需手动注册
const app = createApp(App)
app.mount('#app')

// 全量引入
// import Xui from '@x-ui/x-ui'
// const app = createApp(App)
// app.use(Xui)
// app.mount('#app')

// 按需引入
// import { Button } from '@x-ui/x-ui'
// const app = createApp(App)
// app.use(Button)
// app.mount('#app')
