<script lang="ts" setup>
import { COLORS } from '@/helpers/colorsHelper'

type Props = {
  icon?: any,
  text?: string
}

const props = defineProps<Props>()
const emit = defineEmits(['click'])
</script>

<template>
  <el-button
    v-if="text"
    :color="COLORS.primary_brand_color"
    :icon="icon"
    class="button"
    round
    @click.prevent="emit('click')"
  >{{ text }}
  </el-button>
  <el-button
    v-else
    :color="COLORS.primary_brand_color"
    :icon="icon"
    circle
    class="button"
    @click.prevent="emit('click')"
  />
</template>

<style scoped>
.button {
  box-shadow: var(--el-box-shadow-light);
  color: var(--secondary-brand-color);
}
</style>