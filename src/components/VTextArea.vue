<script lang="ts" setup>
const model = defineModel<string>()

</script>

<template>
  <textarea v-model="model" class="textarea notebook-like" />
</template>

<style scoped>
.textarea {
  width: 98%;
  max-width: 98%;
  height: 700px;
  max-height: 700px;
  resize: none;
  box-shadow: var(--el-box-shadow-light);
  color: var(--secondary-brand-color);
}

.notebook-like {
  border: none;
  outline: none;
  background: repeating-linear-gradient(
    to bottom, var(--neutro-brand-color), var(--neutro-brand-color) 26px, var(--gray-light-brand-color) 27px
  ) local;
  font-size: 18px;
  line-height: 27px;
  padding: 0px 5px;
  margin: 8px;
}
</style>