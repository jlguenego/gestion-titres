<script setup lang="ts">
import { ArrowPathIcon, PlusIcon } from '@heroicons/vue/24/outline'
import type { Group } from '../interfaces/Group'
import type { Privilege } from '../interfaces/Privilege'
import type { User } from '../interfaces/User'
import { useGroupStore } from '../stores/GroupStore'
import { usePrivilegeStore } from '../stores/PrivilegeStore'
import { useUserStore } from '../stores/UserStore'

const groupStore = useGroupStore()
const privilegeStore = usePrivilegeStore()
const userStore = useUserStore()

const getPrivileges = (group: Group): Privilege[] => {
  const privileges = privilegeStore.privileges
  if (privileges === undefined) {
    return []
  }

  return group.privilegeIds.map((id) => {
    const privilege = privileges.find((p) => id === p.id)
    if (privilege === undefined) {
      throw new Error('Cannot get privilege')
    }
    return privilege
  })
}

const getUsers = (group: Group): User[] => {
  const users = userStore.users
  if (users === undefined) {
    return []
  }

  return group.userIds.map((id) => {
    const user = users.find((p) => id === p.id)
    if (user === undefined) {
      throw new Error(`Cannot get user with id = ${id}`)
    }
    return user
  })
}
</script>

<template>
  <PageLayout class="h-full">
    <HeaderPage>
      <h1>Liste des groupes</h1>
    </HeaderPage>

    <MainPage>
      <nav class="flex gap-2">
        <button class="button" title="Rafraîchir" @click="groupStore.refresh()">
          <ArrowPathIcon class="size-6" />
        </button>
        <RouterLink to="/forms/new-group" title="Ajouter" class="button">
          <PlusIcon class="size-6" />
        </RouterLink>
      </nav>
      <div class="flex w-full max-w-md flex-col gap-2">
        <RouterLink
          :to="'/groups/' + group.name"
          v-for="group in groupStore.groups"
          :key="group.name"
          class="flex w-full flex-wrap justify-center gap-x-8 gap-y-4 rounded-xl border p-4 shadow-md hover:bg-gray-50"
        >
          <div class="flex grow flex-col items-center justify-center gap-1">
            <span class="text-2xl font-bold">{{ group.name }}</span>
            <span>{{ group.description }}</span>
            <span class="flex items-center gap-2 self-start">
              <span>Privilèges:</span>
              <RouterLink
                :to="'/privileges/' + privilege.name"
                class="rounded-full border p-2 shadow-md hover:bg-gray-100 active:shadow-sm"
                v-for="privilege in getPrivileges(group)"
                :key="privilege.id"
              >
                {{ privilege.name }}
              </RouterLink>
            </span>
            <span class="flex items-center gap-2 self-start">
              <span>Membres du groupe:</span>
              <RouterLink
                :to="'/users/' + user.name"
                class="rounded-full border p-2 shadow-md hover:bg-gray-100 active:shadow-sm"
                v-for="user in getUsers(group)"
                :key="user.id"
              >
                {{ user.name }}
              </RouterLink>
            </span>
          </div>
        </RouterLink>
      </div>
    </MainPage>
  </PageLayout>
</template>
