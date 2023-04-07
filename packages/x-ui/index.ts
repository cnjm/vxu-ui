import { App } from 'vue'
import Button from '@x-ui/components/button'
// import component end
// import '../scss/index.scss'

const components = [
  Button
] // components

// 全局动态添加组件
const install = (app: App): void => {
  components.forEach(component => {
    app.component(component.name, component)
  })
}

export default {
  install
}
