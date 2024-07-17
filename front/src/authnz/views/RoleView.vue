<script setup lang="ts">
import { ArrowPathIcon, PlusIcon } from '@heroicons/vue/24/outline'
import { useRoleStore } from '../stores/RoleStore'
import { onMounted } from 'vue'

const roleStore = useRoleStore()
onMounted(async () => {
  if (roleStore.roles === undefined) {
    await roleStore.refresh()
  }
  console.log('roleStore.roles: ', roleStore.roles)
})
</script>

<template>
  <PageLayout class="h-full gap-9">
    <HeaderPage>
      <h1>Liste des rôles</h1>
    </HeaderPage>

    <MainPage>
      <nav class="flex gap-2">
        <button class="button" title="Rafraîchir" @click="roleStore.refresh()">
          <ArrowPathIcon class="size-6" />
        </button>
        <RouterLink to="/forms/new-user" title="Ajouter" class="button">
          <PlusIcon class="size-6" />
        </RouterLink>
      </nav>
      <div class="flex w-full max-w-md flex-col gap-2">
        <div
          v-for="item in roleStore.roles"
          :key="item.name"
          class="flex w-full flex-wrap justify-center gap-x-8 gap-y-4 rounded-xl border p-4 shadow-md"
        >
          <div class="flex grow flex-col items-center justify-center gap-1">
            <span class="text-2xl font-bold">{{ item.name }}</span>
            <span>{{ item.description }}</span>
            <span class="flex items-center gap-2 self-start">
              <span>Privilèges:</span>
              <RouterLink
                :to="'/privileges/' + privilege"
                class="rounded-full border p-2 shadow-md hover:bg-gray-50 active:shadow-sm"
                v-for="privilege in item.privileges"
                :key="privilege"
              >
                {{ privilege }}
              </RouterLink>
            </span>
          </div>
        </div>
      </div>
    </MainPage>
  </PageLayout>
</template>
