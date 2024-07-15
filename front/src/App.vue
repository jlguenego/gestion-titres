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
  <div role="none" class="fixed bottom-0 left-0 right-0 top-0 -z-50">
    <img src="/montceaux.jpg" class="flex h-screen w-screen object-cover" />
  </div>
  <div class="layout flex h-screen w-screen flex-col justify-between overflow-y-auto px-2 sm:px-4">
    <HeaderLayout />
    <BodyLayout />
    <FooterLayout />
  </div>
</template>
