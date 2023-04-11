import type { App, Component } from 'vue'

type EventShim = {
  new (...args: any[]): {
    $props: {
      onClick?: (...args: any[]) => void;
    };
  };
};
const camelizeRE = /-(\w)/g
const camelize = (str: string): string =>
  str.replace(camelizeRE, (_, c) => c.toUpperCase())

export type WithInstall<T> = T & {
  install(app: App): void;
} & EventShim;

export function withInstall<T extends Component> (options: T) {
  (options as Record<string, unknown>).install = (app: App) => {
    console.log(options)
    const { name } = options
    if (name) {
      console.log(camelize(`-${name}`), options)
      app.component(name, options)
      app.component(camelize(`-${name}`), options)
    }
  }

  return options as WithInstall<T>
}
