<script setup lang="ts">
import { Plus } from '@element-plus/icons-vue'
import { useCollection, useFirestore } from 'vuefire'
import { addDoc, collection, deleteDoc, doc } from 'firebase/firestore'
import { useRouter } from 'vue-router'
import VButton from '@/components/VButton.vue'
import VHeader from '@/components/VHeader.vue'
import NoteElement from '@/components/NoteElement.vue'

const router = useRouter()

const db = useFirestore()
const coll = collection(db, 'notes')
const notes = useCollection(coll)
const addNote = async () => {
  await addDoc(coll, {
    title: 'Nuova nota',
    text: '',
    createDate: new Date().getTime(),
    updateDate: new Date().getTime()
  })
}
const deleteNote = async (noteId: string) => {
  await deleteDoc(doc(db, 'notes', noteId))
}
const editNote = (noteId: string) => {
  router.push(`/note/${noteId}`)
}
</script>

<template>
  <v-header>
    <template #right>
      <v-button :icon="Plus" text="Nuova Nota" @click="addNote" />
    </template>
  </v-header>

  <el-main class="notes-list">
    <note-element
      v-for="note in notes" :key="note.id"
      :note="note"
      @deleteNote="deleteNote(note.id)"
      @editNote="editNote(note.id)"
    />
  </el-main>
</template>

<style scoped>
.notes-list {
  width: 550px;
  place-self: center;
  flex-grow: 1;
  padding: 30px 0;
  overflow-y: auto;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */

  &::-webkit-scrollbar {
    display: none;
  }
}

</style>