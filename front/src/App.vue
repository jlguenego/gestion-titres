<script lang="ts" setup>
import { onMounted } from 'vue'
import { database } from './authnz/data/database'
import { useUserStore } from './authnz/stores/UserStore'
import BodyLayout from './layout/BodyLayout.vue'
import FooterLayout from './layout/FooterLayout.vue'
import HeaderLayout from './layout/HeaderLayout.vue'

const userStore = useUserStore()

onMounted(async () => {
  if (userStore.users === undefined) {
    await database.init()
  }
})
</script>

<template>
  <HeaderLayout />
  <BodyLayout />
  <FooterLayout />
</template>
