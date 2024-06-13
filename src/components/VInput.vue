<script setup lang="ts">
  const model = defineModel();
  const props = defineProps(['type']);
</script>

<template>
  <el-input v-if="props.type === 'text'" v-model="model" type="{{props.type}}"/>
</template>

<style scoped>

</style>