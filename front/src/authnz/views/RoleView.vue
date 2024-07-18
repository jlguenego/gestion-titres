<script setup lang="ts">
import { ArrowPathIcon, PlusIcon } from '@heroicons/vue/24/outline'
import { useRoleStore } from '../stores/RoleStore'
import { onMounted } from 'vue'
import { usePrivilegeStore } from '../stores/PrivilegeStore'
import type { Privilege } from '../interfaces/Privilege'
import type { Role } from '../interfaces/Role'

const roleStore = useRoleStore()
const privilegeStore = usePrivilegeStore()

const getPrivileges = (role: Role): Privilege[] => {
  const privileges = privilegeStore.privileges
  if (privileges === undefined) {
    return []
  }

  return role.privilegeIds.map((id) => {
    const privilege = privileges.find((p) => id === p.id)
    if (privilege === undefined) {
      throw new Error('Cannot get privilege')
    }
    return privilege
  })
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
        <RouterLink to="/forms/new-role" title="Ajouter" class="button">
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
                :to="'/privileges/' + privilege.name"
                class="rounded-full border p-2 shadow-md hover:bg-gray-100 active:shadow-sm"
                v-for="privilege in getPrivileges(role)"
                :key="privilege.id"
              >
                {{ privilege.name }}
              </RouterLink>
            </span>
          </div>
        </RouterLink>
      </div>
    </MainPage>
  </PageLayout>
</template>
