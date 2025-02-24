<template>
  <div class="app-container">
    <header class="app-header">
      <div class="top-nav fn-flex align-center">
        <RouterLink to="/">首页</RouterLink>
        <RouterLink to="/upload-file">上传文件</RouterLink>
      </div>
    </header>
    <div class="app-content"><RouterView /></div>
  </div>
</template>

<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<style scoped lang="scss">
.app-container {
}
.app-header {
  height: 46px;
  line-height: 46px;
  .top-nav {
    gap: 12px;
    a {
      text-decoration: none;
    }
  }
}
.app-content {
  height: calc(100% - 46px);
}
</style>
