<script setup lang="ts">
import { ArrowPathIcon, PlusIcon } from '@heroicons/vue/24/outline'
import { useRoleStore } from '../stores/RoleStore'
import { onMounted } from 'vue'
import { usePrivilegeStore } from '../stores/PrivilegeStore'

const roleStore = useRoleStore()
const privilegeStore = usePrivilegeStore()

const getPrivilegeName = (privilegeId: string): string => {
  console.log('privilegeId: ', privilegeId)
  if (privilegeStore.privileges === undefined) {
    return ''
  }
  const privilege = privilegeStore.privileges.find((p) => p.id === privilegeId)
  if (privilege === undefined) {
    return ''
  }
  return privilege.name
}

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
        <RouterLink
          :to="'/roles/' + role.name"
          v-for="role in roleStore.roles"
          :key="role.name"
          class="flex w-full flex-wrap justify-center gap-x-8 gap-y-4 rounded-xl border p-4 shadow-md hover:bg-gray-50"
        >
          <div class="flex grow flex-col items-center justify-center gap-1">
            <span class="text-2xl font-bold">{{ role.name }}</span>
            <span>{{ role.description }}</span>
            <span class="flex items-center gap-2 self-start">
              <span>Privilèges:</span>
              <RouterLink
                :to="'/privileges/' + privilege"
                class="rounded-full border p-2 shadow-md hover:bg-gray-100 active:shadow-sm"
                v-for="privilege in role.privilegeIds"
                :key="privilege"
              >
                {{ getPrivilegeName(privilege) }}
              </RouterLink>
            </span>
          </div>
        </RouterLink>
      </div>
    </MainPage>
  </PageLayout>
</template>
