<script setup lang="ts">
import { RouterView } from 'vue-router'

const VITE_TEST_ENV = import.meta.env.VITE_TEST_ENV;
const TEST_ENV = import.meta.env.TEST;

</script>

<template>
  <div class="main-view">
    <RouterView />
  </div>
</template>

<style>
</style>
