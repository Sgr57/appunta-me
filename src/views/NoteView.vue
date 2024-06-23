<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router'
import { Document } from '@element-plus/icons-vue'
import { useDocument, useFirestore } from 'vuefire'
import { doc, updateDoc } from 'firebase/firestore'
import NoteInfo from '@/components/NoteInfo.vue'
import VTextArea from '@/components/VTextArea.vue'
import VButton from '@/components/VButton.vue'
import TheHeader from '@/components/TheHeader.vue'

const router = useRouter()
const route = useRoute();
const noteId: string = route.params.noteId as string;

const db = useFirestore()
const noteDoc = doc(db, 'notes', noteId)
const note = useDocument(noteDoc)

const updateText = async () => {
  await updateDoc(noteDoc, {
    text: note.value?.text ?? '',
    updateDate: new Date().getTime()
  })
}

const updateNote = () => {
  router.push('/')
}


</script>

<template>
  <the-header>
    <template #center>
      <note-info v-if="note" :note="note" show-dates />
    </template>
    <template #right>
      <v-button :icon="Document" text="Salva Nota" @click="updateNote" />
    </template>
  </the-header>

  <el-main class="note-wrapper">
    <v-text-area v-if="note" v-model="note.text" @blur="updateText"></v-text-area>
  </el-main>
</template>

<style scoped>
.note-wrapper {
  width: 550px;
  place-self: center;
  flex-grow: 1;
  padding: 30px 0;
  overflow-y: auto;
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */
  &::-webkit-scrollbar {
    display: none;
  }
}
</style>