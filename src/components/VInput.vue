<script setup lang="ts">
const model = defineModel<string>()

</script>

<template>
  <input v-model="model" class="input title-like" />
</template>

<style scoped>
.input {
  width: 100%;
  color: var(--secondary-brand-color);
}

.title-like {
  border: none;
  outline: none;
  border-radius: 5px;
  background: var(--neutro-brand-color);
  font-size: 22px;
  line-height: 22px;

  &:focus {
    background: white;
  }
}
</style>