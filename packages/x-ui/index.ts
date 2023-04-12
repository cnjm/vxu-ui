import type { App } from 'vue'
import { version } from './package.json'
import Button from './src/button'
// import component end

const components = [
  Button
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

const stdinDefault = {
  install,
  version
}
export {
  stdinDefault as default,
  install,
  version
}
