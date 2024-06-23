<script lang="ts" setup>
import VLogo from '@/components/VLogo.vue'
</script>

<template>
  <el-header class="header" height="70px">
    <slot name="left">
      <v-logo class="logo" />
    </slot>
    <slot name="center">
      <el-text class="app-title">AppuntaMe</el-text>
    </slot>
    <slot name="right">
    </slot>
  </el-header>
</template>

<style scoped>
.header {
  width: 100%;
  background-color: var(--neutro-brand-color);
  box-shadow: var(--el-box-shadow-light);
  z-index: 10;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}

.app-title {
  color: var(--secondary-brand-color);
  font-size: 25px;
}
</style>