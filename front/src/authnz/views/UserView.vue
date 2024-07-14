<script setup lang="ts">
import { Gender, type User } from '@/authnz/interfaces/User'
import { useUserStore } from '@/authnz/stores/UserStore'
import { ArrowPathIcon, PlusIcon } from '@heroicons/vue/24/outline'
import { onMounted } from 'vue'

const userStore = useUserStore()

const getImage = (user: User) => {
  if (user.gender === undefined || user.gender === Gender.OTHER) {
    return '/user-nogender.svg'
  }
  return user.gender === Gender.MALE ? '/user-male.svg' : '/user-female.svg'
}

onMounted(async () => {
  await userStore.refresh()
})
</script>

<template>
  <main class="grow">
    <div class="page h-full max-w-2xl gap-9">
      <h1>Liste des utilisateurs</h1>

      <div class="flex flex-col gap-2">
        <nav class="flex gap-2">
          <button title="Rafraîchir">
            <ArrowPathIcon class="size-6" />
          </button>
          <RouterLink to="/forms/new-user" title="Ajouter" class="button">
            <PlusIcon class="size-6" />
          </RouterLink>
        </nav>
        <div class="flex w-full max-w-md flex-col gap-2">
          <RouterLink
            :to="'/users/' + item.username"
            v-for="item in userStore.users"
            :key="item.displayName"
            class="flex w-full flex-wrap justify-center gap-x-8 gap-y-4 rounded-xl border p-4 shadow-md hover:bg-gray-50 active:shadow-sm"
          >
            <img :src="getImage(item)" alt="Photo utilisateur" class="h-32 rounded-full" />
            <div class="flex grow flex-col items-center justify-center gap-1">
              <span class="text-xl">{{ item.displayName }}</span>
              <span class="font-bold">{{ item.username }}</span>
              <span>{{ item.jobTitle }}</span>
              <span class="text-gray-500">{{ item.email }}</span>
            </div>
          </RouterLink>
        </div>
      </div>
    </div>
  </main>
</template>
