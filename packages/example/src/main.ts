import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

import XUi from '@x-ui/x-ui'
console.log(XUi)
const app = createApp(App)
app.use(XUi)
app.mount('#app')
