<script setup lang="ts">
import { useUserStore } from '@/authnz/stores/UserStore'
import { ArrowPathIcon, PlusIcon } from '@heroicons/vue/24/outline'
import { onMounted } from 'vue'
import { getImage } from '../data/UserImage'

const userStore = useUserStore()

onMounted(async () => {
  await userStore.refresh()
})
</script>

<template>
  <PageLayout class="h-full gap-9">
    <HeaderPage>
      <h1>Liste des utilisateurs</h1>
    </HeaderPage>

    <MainPage>
      <nav class="flex gap-2">
        <button class="button" title="Rafraîchir">
          <ArrowPathIcon class="size-6" />
        </button>
        <RouterLink to="/forms/new-user" title="Ajouter" class="button">
          <PlusIcon class="size-6" />
        </RouterLink>
      </nav>
      <div class="flex w-full max-w-md flex-col gap-2">
        <RouterLink
          :to="'/users/' + item.name"
          v-for="item in userStore.users"
          :key="item.displayName"
          class="flex w-full flex-wrap justify-center gap-x-8 gap-y-4 rounded-xl border p-4 shadow-md hover:bg-gray-50 active:shadow-sm"
        >
          <img :src="getImage(item)" alt="Photo utilisateur" class="h-32 w-32 rounded-full" />
          <div class="flex grow flex-col items-center justify-center gap-1">
            <span class="text-xl">{{ item.displayName }}</span>
            <span class="font-bold">{{ item.name }}</span>
            <span>{{ item.jobTitle }}</span>
            <span class="text-gray-500">{{ item.email }}</span>
          </div>
        </RouterLink>
      </div>
    </MainPage>
  </PageLayout>
</template>
