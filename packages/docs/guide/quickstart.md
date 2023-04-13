# 快速开始
​
通过本章节你可以了解到 Vxu 的安装方法和基本使用姿势。
​
## 安装
​
通过 npm 安装

```shell
npm install vxu-ui
```

自然也可以通过`yarn`或`pnpm`进行安装

```shell
# 通过yarn
yarn add vxu-ui

# 通过pnpm
pnpm add vxu-ui
```

## 示例

暂无示例

## 引入组件

提供全量引入注册、按需引入注册、自动按需引入注册三种组件注册方式

当然你也可以选择局部注册使用

### 方式一：全量引入

```ts
// ...
import Vxu from 'vxu-ui'
const app = createApp(App)
app.use(Vxu)
app.mount('#app')
```

### 方式二：手动按需引入

```ts
// ...
// 导入需要用到的组件
import { Button } from 'vxu-ui'
const app = createApp(App)
// 注册组件
app.use(Button)
app.mount('#app')
```

### 方式三：自动按需引入

在基于 `vite、webpack` 或 `vue-cli` 的项目中使用 `Vxu` 时，可以使用 [`unplugin-vue-components`](https://github.com/antfu/unplugin-vue-components) 插件，它可以自动引入组件，并按需引入组件的样式。

1. 安装 `unplugin-vue-components` 插件

```shell
# 通过 npm 安装
npm i unplugin-vue-components -D

# 通过 yarn 安装
yarn add unplugin-vue-components -D

# 通过 pnpm 安装
pnpm add unplugin-vue-components -D
```

2. 配置插件

如果是基于 `vite` 的项目，在 `vite.config.js` 文件中配置插件：

```js
import vue from '@vitejs/plugin-vue';
import Components from 'unplugin-vue-components/vite';

export default defineConfig({
  plugins: [
    // ...
    Components({
      dirs: [], // 你的其他需要自动导入的组件
      resolvers: [
        (componentName) => {
          if (componentName.startsWith('Vxu')) { return { name: componentName.slice(3), from: 'vxu-ui' } }
        }
      ]
    })
  ],
  // ...
})
```

如果是基于 `vue-cli` 的项目，在 `vue.config.js` 文件中配置插件：

```js
const Components = require('unplugin-vue-components/webpack');

module.exports = {
  configureWebpack: {
    plugins: [
      Components({
        resolvers: [
        (componentName) => {
          if (componentName.startsWith('Vxu')) { return { name: componentName.slice(3), from: 'vxu-ui' } }
        }
      ]
      }),
    ],
  },
};
```

如果是基于 `webpack` 的项目，在 `webpack.config.js` 文件中配置插件：

```js
const Components = require('unplugin-vue-components/webpack');

module.exports = {
  configureWebpack: {
    plugins: [
      Components({
        resolvers: [
        (componentName) => {
          if (componentName.startsWith('Vxu')) { return { name: componentName.slice(3), from: 'vxu-ui' } }
        }
      ]
      }),
    ],
  },
};
```

## 使用组件

如上述方式引入注册的组件皆可如下在模板中使用 `Vxu` 组件

```vue
<template>
  <x-button />
</template>
```

## 局部注册

同样的，你也可以选择局部注册组件而不是全局使用

1. 局部注册后，你可以在当前组件中使用注册的 `Vxu` 组件。

```vue
<script lang="ts">
  import { Button } from 'vxu-ui'
  export default {
    components: {
      [Button.name]: Button
    }
  }
</script>
<template>
  <x-button/>
</template>
```


2. `setup` 中使用

在 `<script setup>` 中可以直接使用 `Vxu` 组件，不需要进行组件注册。

```vue
<script setup lang="ts">
  import { Button } from 'vxu-ui'
</script>
<template>
  <Button/>
</template>
```

3. `JSX/TSX` 中使用

在 JSX 和 TSX 中可以直接使用 `Vxu` 组件，不需要进行组件注册。

```ts
import { Button } from 'vxu-ui'
export default defineComponent({
  // ...
  setup () {
    return () => {
      return <Button />
    }
  }
})

```
