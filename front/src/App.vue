<script lang="ts" setup>
import { onMounted, ref } from 'vue'
import { database } from './authnz/data/database'
import { useUserStore } from './authnz/stores/UserStore'
import BodyLayout from './layout/BodyLayout.vue'
import FooterLayout from './layout/FooterLayout.vue'
import HeaderLayout from './layout/HeaderLayout.vue'
import { sleep } from './utils/misc'

const userStore = useUserStore()
const isLoading = ref(true)

onMounted(async () => {
  await Promise.all([
    sleep(600),
    async () => {
      if (userStore.users === undefined) {
        await database.init()
      }
    },
  ])
  isLoading.value = false
})
</script>

<template>
  <div
    v-if="isLoading"
    class="flex h-screen w-screen flex-col items-center justify-center gap-6 bg-green-300"
  >
    <span class="text-4xl font-bold">Gestion Titre</span>
    <span class="text-2xl">La gestion efficace de vos titres !</span>
    <LoadingIcon class="h-40 w-40 animate-spin" />
  </div>
  <div v-else>
    <div role="none" class="fixed bottom-0 left-0 right-0 top-0 -z-50">
      <img src="/montceaux.jpg" class="flex h-screen w-screen object-cover" />
    </div>
    <div
      class="layout flex h-screen w-screen flex-col justify-between overflow-y-auto px-2 sm:px-4"
    >
      <HeaderLayout />
      <BodyLayout />
      <FooterLayout />
    </div>
  </div>
</template>
