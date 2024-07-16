<script setup lang="ts">
import { ArrowPathIcon, PlusIcon } from '@heroicons/vue/24/outline'
import { usePrivilegeStore } from '../stores/PrivilegeStore'
import { onMounted } from 'vue'

const privilegeStore = usePrivilegeStore()

onMounted(async () => {
  if (privilegeStore.privileges === undefined) {
    await privilegeStore.refresh()
  }
  console.log('privilegeStore.privileges: ', privilegeStore.privileges)
})
</script>

<template>
  <PageLayout class="self-stretch">
    <HeaderPage>
      <h1>Liste des privileges</h1>
    </HeaderPage>
    <MainPage>
      <p>
        Un privilège est un ensemble de fonctionnalités qu'un utilisateur a le droit de se servir si
        il dispose de ce privilège.
      </p>

      <div class="flex flex-col gap-2">
        <nav class="flex gap-2">
          <button title="Rafraîchir">
            <ArrowPathIcon class="size-6" />
          </button>
          <RouterLink to="/forms/new-privilege" title="Ajouter" class="button">
            <PlusIcon class="size-6" />
          </RouterLink>
        </nav>
        <div class="flex w-full max-w-md flex-col gap-2">
          <RouterLink
            :to="'/privileges/' + privilege.name"
            v-for="privilege in privilegeStore.privileges"
            :key="privilege.name"
            class="flex w-full flex-wrap justify-center gap-x-8 gap-y-4 rounded-xl border p-4 shadow-md hover:bg-gray-50 active:shadow-sm"
          >
            <div class="flex flex-col">
              <span class="text-xl font-bold">{{ privilege.name }}</span>
              <span class="text-gray-500">{{ privilege.description }}</span>
            </div>
          </RouterLink>
        </div>
      </div>
    </MainPage>
  </PageLayout>
</template>
