import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import * as path from 'path'
import VueJsx from '@vitejs/plugin-vue-jsx'
import viteDts from 'vite-plugin-dts'
import { buildPlugin } from 'vite-plugin-build'

export default defineConfig({
  plugins: [
    vue(),
    VueJsx(),
    viteDts({
      insertTypesEntry: true,
      staticImport: true,
      skipDiagnostics: true
    }),
    buildPlugin({
      fileBuild: {
        emitDeclaration: true,
        esOutputDir: path.resolve(__dirname, '../../es'),
        commonJsOutputDir: path.resolve(__dirname, '../../lib')
      },
      libBuild: {
        buisldOptions: {
          rollupOptions: {
            external: ['vue'],
            output: { globsals: { vue: 'Vue' } }
          }
        }
      }
    })
  ]
  // build: {
  //   lib: {
  //     entry: path.resolve(__dirname, './index.ts'),
  //     name: 'vxu-ui',
  //     fileName: format => `vxu-ui.${format}.js`
  //   },
  //   outDir: path.resolve(__dirname, '../../lib'),
  //   rollupOptions: {
  //     external: ['vue'],
  //     output: {
  //       globals: {
  //         vue: 'Vue'
  //       }
  //     }
  //   }
  // }
})
