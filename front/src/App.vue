<script lang="ts" setup>
import HeaderLayout from './layout/HeaderLayout.vue'
import BodyLayout from './layout/BodyLayout.vue'
import FooterLayout from './layout/FooterLayout.vue'
import { useUserStore } from './authnz/UserStore'
import { onMounted } from 'vue'

const userStore = useUserStore()

onMounted(async () => {
  if (userStore.users === undefined) {
    await userStore.refresh()
  }
})
</script>

<template>
  <HeaderLayout />
  <BodyLayout />
  <FooterLayout />
</template>
