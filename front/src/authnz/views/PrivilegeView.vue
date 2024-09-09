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
        Un privilège P est un ensemble de permissions P1, P2, etc. qu'un utilisateur U dispose si U
        appartient à un groupe G qui possède le privilège P.
      </p>

      <p>
        Ainsi une fonctionnalité qui est autorisée avec la permission P1 peut être utilisée par un
        utilisateur U, qui appartient à au moins un groupe G qui possède un privilège P contenant P1
      </p>

      <div class="flex flex-col gap-2">
        <nav class="flex gap-2">
          <button class="button" title="Rafraîchir">
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
            class="flex w-full flex-col gap-x-8 gap-y-4 rounded-xl border p-4 shadow-md hover:bg-gray-50 active:shadow-sm"
          >
            <div class="flex flex-col items-start">
              <span class="text-xl font-bold">{{ privilege.name }}</span>
              <span class="text-gray-500">{{ privilege.description }}</span>
            </div>
          </RouterLink>
        </div>
      </div>
    </MainPage>
  </PageLayout>
</template>
