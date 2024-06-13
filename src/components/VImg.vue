<script setup lang="ts">
const props = defineProps(['image']);
</script>

<template>
  <img src="../assets/{{props.image}}" alt="logo">
</template>

<style scoped>

</style>