import type { App } from 'vue'
import { version } from '../package.json'
import Button from './button'
import Input from './input'
// import component end

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

export * from './button'
export * from './input'

const stdinDefault = {
  install,
  version
}
export {
  stdinDefault as default,
  install,
  version
}
