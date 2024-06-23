<script lang="ts" setup>
import VInput from '@/components/VInput.vue'
import { useFirestore } from 'vuefire'
import { doc, updateDoc } from 'firebase/firestore'
import { computed } from 'vue'
import { formatDate } from '@/helpers/dateHelper'

type Props = {
  note: any,
  showId?: boolean,
  showPreview?: boolean,
  showDates?: boolean,
}
const props = defineProps<Props>()
const db = useFirestore()
const noteDoc = doc(db, 'notes', props.note.id)

const updateTitle = async () => {
  await updateDoc(noteDoc, {
    title: props.note.title,
    updateDate: new Date().getTime()
  })
}

const updateDate = computed(() => formatDate(props.note.updateDate))

</script>

<template>
  <div class="note-info">
    <v-input v-model="note.title" @blur="updateTitle"></v-input>
    <!--    <el-text v-if="showId" class="note-detail">Id: {{ note.id }}</el-text>-->
    <el-text v-if="showDates" class="note-detail">Ultima modifica: {{ updateDate }}</el-text>
    <el-text v-if="showPreview" class="text-preview" line-clamp="5">{{ note.text }}</el-text>
  </div>
</template>

<style scoped>
.note-info {
  display: flex;
  flex-direction: column;

  .note-detail {
    color: var(--gray-light-brand-color);
    font-size: 12px;
    align-self: flex-start;
  }

  .text-preview {
    margin-top: 5px;
    white-space: pre-wrap;
    align-self: flex-start;
  }
}
</style>