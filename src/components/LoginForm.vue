<script lang="ts" setup>

import { Lock, User } from '@element-plus/icons-vue'
import { COLORS } from '@/helpers/colorsHelper'
import { ref } from 'vue'

const username = ref()
const password = ref()

const emit = defineEmits(['success'])
</script>

<template>
  <div class="login-form">
    <el-input v-model="username" :prefix-icon="User" class="login-input" placeholder="Username" type="text" />
    <el-input v-model="password" :prefix-icon="Lock" class="login-input" placeholder="Password" type="password" />
    <el-button :color="COLORS.primary_brand_color" class="button" round @click.prevent="emit('success')">Login
    </el-button>
  </div>
</template>

<style scoped>
.login-form {
  margin: 20px;
  text-align: center;
}

.login-input {
  padding-bottom: 20px;
}
</style>