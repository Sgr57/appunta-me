<script setup lang="ts">
import { Lock, User } from '@element-plus/icons-vue'
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { COLORS } from '@/helpers/colorsHelper'

const router = useRouter();

const username = ref();
const password = ref();

const goTo = (path: string) => {
  router.push(path);
}

</script>

<template>
<div class="login-view">
  <div class="login-box">

    <div class="logo-container">
      <el-image class="logo" src="/src/assets/logo2.jpg" fit="fill" />
    </div>
    <div class="app-title">AppuntaMe</div>

    <div class="login-form">
      <div class="login-input">
        <el-input v-model="username" placeholder="Username" type="text" :prefix-icon="User"/>
      </div>
      <div class="login-input">
        <el-input v-model="password" placeholder="Password" type="password" :prefix-icon="Lock"/>
      </div>
      <div class="login-button">
        <el-button class="button" :color="COLORS.primary_brand_color" round @click.prevent="goTo('/')">Login</el-button>
      </div>
    </div>

  </div>
</div>
</template>

<style scoped>
.login-view {
  height: 100%;
  display: grid;
}
.login-box {
  border-radius: 20px;
  padding: 30px;
  width: 300px;
  place-self: center;
  background-color: var(--neutro-brand-color);
  box-shadow: var(--el-box-shadow-light);

  .app-title {
    color: var(--secondary-brand-color);
    font-size: 25px;
    text-align: center;
    margin: 15px;
  }

  .logo-container {
    display: flex;
    align-items: center;
    justify-content: center;

    .logo {
      width: 150px;
      height: 150px;
      border-radius: 50%;
      box-shadow: var(--el-box-shadow-light);
    }
  }

  .login-form {
    margin: 20px;

    .login-input {
      padding-bottom: 20px;
    }

    .login-button {
      text-align: center;
    }
  }

}

.button {
  color: var(--secondary-brand-color);
}
</style>