import DefaultTheme from 'vitepress/theme'
import { AntDesignContainer } from '@vitepress-demo-preview/component'
import '@vitepress-demo-preview/component/dist/style.css'
import { EnhanceAppContext } from 'vitepress'
import Vxu from '@vxu-ui/vxu-ui'

// import Layout from '../layout/index.vue'


export default {
  ...DefaultTheme,
  
  // Layout,
  enhanceApp(ctx: EnhanceAppContext) {
    ctx.app.component('demo-preview', AntDesignContainer)
    ctx.app.use(Vxu)
  }
}