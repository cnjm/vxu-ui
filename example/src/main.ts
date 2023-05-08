import { createApp } from 'vue'
import 'normalize.css'
import './style.css'
import App from './App.vue'

// 自动按需引入、无需手动注册
const app = createApp(App)
app.mount('#app')

// 全量引入
// import Vxu from '@vxu-ui/vxu-ui'
// const app = createApp(App)
// app.use(Vxu)
// app.mount('#app')

// 按需引入
// import { Button } from '@vxu-ui/vxu-ui'
// const app = createApp(App)
// app.use(Button)
// app.mount('#app')
