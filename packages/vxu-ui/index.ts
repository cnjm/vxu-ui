import type { App } from 'vue'
import { version } from './package.json'
import './src/style/index.scss'
import Button from './src/button'
import Input from './src/input'

const components = [
  Button,
  Input
]

const install = (app: App): void => {
  components.forEach(component => {
    app.use(component)
    // if (component.install) {
    //   app.use(component)
    // } else if (component.name) {
    //   app.component(component.name, component)
    // }
  })
}

export * from './src/button'
export * from './src/input'

const stdinDefault = {
  install,
  version
}
export {
  stdinDefault as default,
  install,
  version
}
