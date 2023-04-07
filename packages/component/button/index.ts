
import Button from './src/button.vue'

import { App } from 'vue'
Button.install = (app: App) => {
  app.component(Button.name, Button)
}
export default Button

export * from './src/button'
