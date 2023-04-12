import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import eslint from 'vite-plugin-eslint'
import vueJsx from '@vitejs/plugin-vue-jsx'
import Components from 'unplugin-vue-components/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    eslint(),
    Components({
      dirs: [],
      resolvers: [
        (componentName) => {
          if (componentName.startsWith('X')) { return { name: componentName.slice(1), from: '@x-ui/x-ui' } }
        }
      ]
    })
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  },
  server: {
    port: 3000,
    cors: true,
    proxy: {}
  },
  build: {
    outDir: path.resolve(__dirname, '../dist')
  }

})
