<script setup lang="ts">

import { useRoute, useRouter } from 'vue-router'
import { Document } from '@element-plus/icons-vue'
import { useDocument, useFirestore } from 'vuefire'
import { doc, updateDoc } from 'firebase/firestore'
import NoteInfo from '@/components/NoteInfo.vue'
import VTextArea from '@/components/VTextArea.vue'
import VButton from '@/components/VButton.vue'
import VHeader from '@/components/VHeader.vue'

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

const router = useRouter();
const goTo = (path: string) => {
  router.push(path);
}

const saveNote = () => {

}

</script>

<template>
  <!--  <el-container>-->
  <v-header>
    <template #center>
      <note-info v-if="note" :note="note" show-dates />
    </template>
    <template #right>
      <v-button :icon="Document" text="Salva Nota" @click="goTo('/')" />
    </template>
  </v-header>

    <el-main class="note-wrapper">
      <v-text-area v-if="note" v-model="note.text" @blur="updateText"></v-text-area>
    </el-main>
  <!--  </el-container>-->
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