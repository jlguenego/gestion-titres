<script setup lang="ts">
import { useUserStore } from '@/authnz/UserStore'

const userStore = useUserStore()
</script>

<template>
  <main class="grow">
    <div class="page h-full max-w-2xl">
      <h1>Liste des utilisateurs</h1>

      <nav class="flex flex-col gap-2">
        <RouterLink
          v-for="item in userStore.users"
          :key="item.displayName"
          :to="'/users/' + item.username"
          class="button"
        >
          <img src="/user-male.svg" alt="Photo utilisateur" />
          <span>{{ item.displayName }}</span>
          <span>{{ item.jobTitle }}</span>
          <span>{{ item.email }}</span>
          <span>{{ item.phone }}</span>
        </RouterLink>
      </nav>
    </div>
  </main>
</template>
