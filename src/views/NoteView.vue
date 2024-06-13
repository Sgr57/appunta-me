<script setup lang="ts">

import { useRoute, useRouter } from 'vue-router'
import { COLORS } from '@/helpers/colorsHelper'
import { Document } from '@element-plus/icons-vue'
import { useDocument, useFirestore } from 'vuefire'
import { collection, doc } from 'firebase/firestore'
import { onMounted, computed, ref } from 'vue'

const route = useRoute();
const noteId: string = route.params.noteId as string;

const db = useFirestore()
const noteDocument = useDocument(doc(db, "notes", noteId))
const note = computed(() => noteDocument.value)

// TODO: prefillare e rendere editabile
const noteText = ref("");


const router = useRouter();
const goTo = (path: string) => {
  router.push(path);
}

const saveNote = () => {

}

</script>

<template>
  <div class="note-view">
    <el-header height="70px" class="header-container">
      <div class="header">
        <el-image class="logo" src="/src/assets/logo2.jpg" fit="fill" @click.prevent="goTo('/')"/>
        <div class="note-info">
          <div class="note-title" v-if="note">{{note.title}}</div>
          <div class="note-id"  v-if="note">{{note.id}}</div>
        </div>
        <el-button class="header-button" :color="COLORS.primary_brand_color" :icon="Document" round @click.prevent="saveNote()">
          Salva Nota
        </el-button>
      </div>
    </el-header>

    <el-main class="note-wrapper">
      <div class="note">
        <textarea class="textarea notebook-like" v-model="noteText"/>
      </div>
    </el-main>
  </div>
</template>

<style scoped>
.note-view {
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

    .note-info {

      .note-title {
        color: var(--secondary-brand-color);
        font-size: 22px;
      }
      .note-id {
        color: var(--gray-light-brand-color);
        font-size: 12px;
      }
    }

    .header-button {
      box-shadow: var(--el-box-shadow-light);
    }
  }
}
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

  .note {
    //box-shadow: var(--el-box-shadow-light);

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
  }
}
</style>