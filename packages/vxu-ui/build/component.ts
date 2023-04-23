import { build } from 'vite'
import { glob } from 'glob'
import dts from 'vite-plugin-dts'
import { resolve, workRoot, getVuePlugins } from './utils'
// import StyleLoader from '../plugins/style-loader'

export const start = async () => {
  const vuePlugins: any[] = await getVuePlugins()
  const globFile = await glob('src/**/**.{vue,ts,tsx,js}', {
    cwd: process.cwd(),
    absolute: true
  })

  for await (const file of globFile) {
    console.log(file)
    const plugins = [...vuePlugins]

    plugins.push(
      dts({
        entryRoot: `${workRoot}/src`,
        outputDir: [resolve('../../dist/es'), resolve('../../dist/cjs')],
        exclude: ['src/vite-env.d.ts'],
        cleanVueFileName: true,
        staticImport: true,
        compilerOptions: {}
      })
    )
    await build({
      plugins,
      build: {
        assetsDir: resolve('../../dist/es/'),
        emptyOutDir: false,
        minify: 'esbuild',
        sourcemap: true,
        lib: {
          entry: resolve(file),
          name: 'vxu'
        },
        rollupOptions: {
          external: ['vue'],
          output: [
            {
              format: 'es',
              dir: resolve('../../dist/es'),
              preserveModules: true,
              preserveModulesRoot: `${workRoot}/src`,
              entryFileNames: '[name].mjs'
            },
            {
              format: 'cjs',
              dir: resolve('../../dist/cjs'),
              preserveModules: true,
              preserveModulesRoot: `${workRoot}/src`,
              exports: 'named',
              entryFileNames: '[name].js'
            }
          ]
        }
      }
    })
  }
}

start()
