<!--.vitepress/theme/MyLayout.vue-->
<script lang="ts" setup>
import DefaultTheme from "vitepress/theme";
const { Layout } = DefaultTheme;
</script>
<template>
  <Layout>
    <!-- <template #aside-outline-before>
      <iframe id="x-iframe" src="http://127.0.0.1:3000/"></iframe>
    </template> -->

  </Layout>
</template>

<style>
.aside {
  min-width: 375px;
}
.VPDocAside {
  height: 640px;
}
.x-iframe {
  height: 640px;
  display: block;
  width: 100%;
  overflow-clip-margin: content-box !important;
  border-width: 2px;
  border-style: inset;
  border-color: initial;
  border-image: initial;
  overflow: clip !important;
  border-top-width: 0px;
  border-bottom-width: 0px;
  border-left-width: 0px;
  border-right-width: 0px;
}
</style>
