<script lang="ts" setup>
import NoteInfo from '@/components/NoteInfo.vue'
import { Delete, EditPen } from '@element-plus/icons-vue'
import VButton from '@/components/VButton.vue'

type Props = {
  note: any,
}
const props = defineProps<Props>()

const emit = defineEmits(['editNote', 'deleteNote'])
</script>

<template>
  <div class="note-element">
    <note-info :note="note" class="note-info" show-dates show-preview />
    <div class="note-actions">
      <v-button :icon="EditPen" @click="emit('editNote')" />
      <v-button :icon="Delete" @click="emit('deleteNote')" />
    </div>
  </div>
</template>

<style scoped>
.note-element {
  margin: 15px;
  padding: 20px;
  border-radius: 10px;
  background-color: var(--neutro-brand-color);
  box-shadow: var(--el-box-shadow-light);
  display: flex;
  flex-direction: row;
  position: relative;

  .note-info {
    flex: 1;
  }

  .note-actions {
    text-align: right;
    position: absolute;
    top: 20px;
    right: 20px;
  }
}
</style>