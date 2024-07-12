<script setup lang="ts">
import { Gender, type User } from '@/authnz/interfaces/User'
import { useUserStore } from '@/authnz/UserStore'

const userStore = useUserStore()

const getImage = (user: User) => {
  if (user.gender === undefined) {
    return '/user-nogender.svg'
  }
  return user.gender === Gender.MALE ? '/user-male.svg' : '/user-female.svg'
}
</script>

<template>
  <main class="grow">
    <div class="page h-full max-w-2xl">
      <h1>Liste des utilisateurs</h1>

      <nav class="flex w-full max-w-md flex-col gap-2">
        <div
          v-for="item in userStore.users"
          :key="item.displayName"
          class="flex w-full flex-wrap justify-center gap-x-8 gap-y-4 rounded-xl border p-4"
        >
          <RouterLink :to="'/users/' + item.username">
            <img :src="getImage(item)" alt="Photo utilisateur" class="h-32 rounded-full" />
          </RouterLink>
          <div class="flex flex-col items-center justify-center gap-1">
            <span class="text-xl">{{ item.displayName }}</span>
            <span class="font-bold">{{ item.username }}</span>
            <span>{{ item.jobTitle }}</span>
            <span class="text-gray-500">{{ item.email }}</span>
          </div>
        </div>
      </nav>
    </div>
  </main>
</template>
