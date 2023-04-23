import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import VueJsx from '@vitejs/plugin-vue-jsx'
// import viteDts from 'vite-plugin-dts'
// import { buildPlugin } from 'vite-plugin-build'

export default defineConfig({
  plugins: [
    vue(),
    VueJsx()
    // viteDts({
    //   insertTypesEntry: true,
    //   staticImport: true,
    //   skipDiagnostics: true
    // })
  ]
  // build: {
  //   lib: {
  //     entry: path.resolve(__dirname, './index.ts'),
  //     name: 'vxu-ui',
  //     fileName: format => `vxu-ui.${format}.js`
  //   },
  //   outDir: path.resolve(__dirname, '../../lib'),
  //   rollupOptions: {
  //     input: path.resolve(__dirname, './index.ts'),
  //     external: ['vue'],
  //     output: {
  //       name: 'Vxu',
  //       globals: {
  //         vue: 'Vue'
  //       }
  //     }
  //   }
  // }
})
