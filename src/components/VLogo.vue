<script lang="ts" setup>
type Props = {
  big?: boolean
  withTitle?: boolean
}
const props = defineProps<Props>()
</script>

<template>
  <div class="logo-title-wrapper">
    <el-image :class="{logo: true, big: big, small: !big}" fit="fill" src="/src/assets/logoAM.svg" />
    <el-text v-if="withTitle" class="title">AppuntaMe</el-text>
  </div>
</template>

<style scoped>
.logo-title-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.logo {
}

.big {
  width: 150px;
  height: 150px;
}

.small {
  width: 70px;
  height: 70px;
}

.title {
  color: var(--secondary-brand-color);
  font-size: 25px;
  text-align: center;
}
</style>