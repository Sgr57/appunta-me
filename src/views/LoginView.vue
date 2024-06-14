<script setup lang="ts">
import { useRouter } from 'vue-router'
import VLogo from '@/components/VLogo.vue'
import LoginForm from '@/components/LoginForm.vue'

const router = useRouter();

const goToHomePage = () => {
  router.replace('/')
}

</script>

<template>
  <div class="login-box">
    <v-logo big with-title />
    <login-form @success="goToHomePage" />
  </div>
</template>

<style scoped>
.login-box {
  border-radius: 20px;
  padding: 30px;
  width: 300px;
  background-color: var(--neutro-brand-color);
  box-shadow: var(--el-box-shadow-light);
}
</style>