<script setup lang="ts">
import { Plus, InfoFilled, EditPen, Delete } from '@element-plus/icons-vue'
import { useCollection } from 'vuefire'
import { collection, addDoc, serverTimestamp, deleteDoc, doc } from 'firebase/firestore'
import { useFirestore } from 'vuefire'
import { useRouter } from 'vue-router'
import { COLORS } from '@/helpers/colorsHelper'

const router = useRouter();
const goTo = (path: string) => {
  router.push(path);
}

const db = useFirestore()
const coll = collection(db, 'notes')
const notes = useCollection(coll)
const addNote = async () => {
  const docRef = await addDoc(coll, {
    title: "Nuova nota senza nome",
    text: "",
    createdDate: serverTimestamp(),
    updateDate: serverTimestamp(),
  });
  console.log("Document written with ID: ", docRef.id);
}
const deleteNote = async (noteId: string) => {
  await deleteDoc(doc(db, "notes", noteId));
  console.log("Document deleted with ID: ", noteId);
}
</script>

<template>
  <div class="home-view">
    <el-header height="70px" class="header-container">
      <div class="header">
        <el-image class="logo" src="/src/assets/logo2.jpg" fit="fill" />
        <div class="app-title">AppuntaMe</div>
        <el-button class="header-button button" :color="COLORS.primary_brand_color" :icon="Plus" round @click.prevent="addNote()">
          Aggiungi Nota
        </el-button>
      </div>
    </el-header>

    <el-main class="notes-list">
      <div v-for="note in notes" :key="note.id" class="note-element">
        <div class="note-info">
          <div class="note-title">{{note.title}}</div>
          <div class="note-id">{{note.id}}</div>
        </div>
        <div class="note-actions">
          <el-button class="button" :color="COLORS.primary_brand_color" :icon="EditPen" circle @click.prevent="goTo(`/note/${note.id}`)"/>
          <el-button class="button" :color="COLORS.primary_brand_color" :icon="InfoFilled" circle />
          <el-button class="button" :color="COLORS.primary_brand_color" :icon="Delete" circle @click.prevent="deleteNote(note.id)"/>
        </div>
      </div>
    </el-main>
  </div>
</template>

<style scoped>
.home-view {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.header-container {
  width: 100%;
  background-color: var(--neutro-brand-color);
  display: grid;
  box-shadow: var(--el-box-shadow-light);
  z-index: 10;

  .header {
    width: 650px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    place-self: center;

    .logo {
      width: 60px;
      height: 60px;
      border-radius: 50%;
      box-shadow: var(--el-box-shadow-light);
    }

    .app-title {
      color: var(--secondary-brand-color);
      font-size: 25px;
    }

    .header-button {
      box-shadow: var(--el-box-shadow-light);
    }
  }
}
.notes-list {
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

  .note-element {
    margin: 15px;
    padding: 20px;
    border-radius: 10px;
    place-self: center;
    background-color: var(--neutro-brand-color);
    box-shadow: var(--el-box-shadow-light);
    display: flex;
    flex-direction: row;

    .note-info {
      flex: 1;

      .note-title {
        color: var(--secondary-brand-color);
        font-size: 22px;
      }
      .note-id {
        color: var(--gray-light-brand-color);
        font-size: 12px;
      }
    }
    .note-actions {
      text-align: right;
    }
  }
}

.button {
  color: var(--secondary-brand-color);
}
</style>