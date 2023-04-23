
import path from 'path'
import { importModule } from 'local-pkg'

export const workRoot = process.cwd()

export const resolve = (str: string) => {
  return path.resolve(workRoot, str)
}

export const getVuePlugins = async () => {
  const plugins: any[] = []
  plugins.push((await importModule('@vitejs/plugin-vue')).default())
  console.log(plugins)
  return plugins
}
