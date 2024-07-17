<script setup lang="ts">
import { clone } from '@/utils/misc'
import {
  ChevronLeftIcon,
  FolderArrowDownIcon,
  PencilIcon,
  TrashIcon,
} from '@heroicons/vue/24/outline'
import { onMounted, reactive, ref, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { type Privilege } from '../interfaces/Privilege'
import type { Role } from '../interfaces/Role'
import { usePrivilegeStore } from '../stores/PrivilegeStore'
import { useRoleStore } from '../stores/RoleStore'

const route = useRoute()
const router = useRouter()
const roleStore = useRoleStore()
const privilegeStore = usePrivilegeStore()

const privileges = ref<Privilege[]>([])

const role = reactive<Role>({
  id: '',
  name: '',
  description: '',
  privilegeIds: [],
})

const originalRole = reactive<Role>({
  id: '',
  name: '',
  description: '',
  privilegeIds: [],
})

const message = ref('')
const isEditing = ref(false)
const isRoleDifferent = ref(false)

const check = () => {
  console.log('check')
  message.value = ''
  if (isEditing.value === false) {
    return
  }
  role.privilegeIds = privileges.value.map((p) => p.id)
  const originalRoleStr = JSON.stringify(originalRole)
  const roleStr = JSON.stringify(role)
  isRoleDifferent.value = originalRoleStr !== roleStr
}

watch(role, check, { deep: true })
// watch(privileges, check, { deep: true })

const selectEditMode = () => {
  message.value = ''
  isEditing.value = !isEditing.value
}

const handleRemove = async () => {
  console.log('role.id: ', role.id)

  await roleStore.remove([role.id])
  await router.replace('/roles')
}

const onSubmit = async () => {
  try {
    message.value = ''
    await roleStore.replace({ ...role })
    Object.assign(originalRole, clone(role))
    check()
    isEditing.value = false
    message.value = 'Enregistré avec succès.'
  } catch (err) {
    if (err instanceof Error) {
      message.value = err.message
    }
  }
}

onMounted(async () => {
  if (privilegeStore.privileges === undefined) {
    await privilegeStore.refresh()
  }
  if (privilegeStore.privileges === undefined) {
    return
  }
  const privilegeList: Privilege[] = privilegeStore.privileges
  const name = route.params.name
  if (roleStore.roles === undefined) {
    await roleStore.refresh()
  }
  if (roleStore.roles === undefined) {
    return
  }
  const selectedRole = roleStore.roles.find((u) => u.name === name)
  if (selectedRole === undefined) {
    return
  }
  Object.assign(role, clone(selectedRole))
  Object.assign(originalRole, clone(selectedRole))
  // privileges.value = role.privilegeIds.map((id) => {
  //   const result = privilegeList.find((p) => p.id === id)
  //   if (result === undefined) {
  //     throw new Error('should not happen')
  //   }
  //   return result
  // })
})
</script>

<template>
  <PageLayout v-if="privilegeStore.privileges">
    <HeaderPage>
      <h1>Détails du rôle {{ role.name }}</h1>
    </HeaderPage>
    <MainPage>
      <form @submit.prevent="onSubmit()">
        <nav class="flex gap-2">
          <button class="button" type="button" @click="selectEditMode()" title="Mode édition">
            <PencilIcon class="size-6" />
          </button>
          <button class="button" type="button" @click="handleRemove()" title="Mode édition">
            <TrashIcon class="size-6" />
          </button>
        </nav>
        <div class="flex flex-wrap gap-4">
          <label>
            <span>Nom *</span>
            <input type="text" placeholder="Ex: admin" v-model="role.name" :disabled="!isEditing" />
            <span class="error">{{ '' }}</span>
          </label>
          <label>
            <span>Description *</span>
            <input
              type="text"
              v-model="role.description"
              autocomplete="new-password"
              :disabled="!isEditing"
            />
            <span class="error">{{ '' }}</span>
          </label>
        </div>

        <label>
          <span> Liste de privilèges </span>
          <SelectItems
            :items="privilegeStore.privileges"
            v-model="privileges"
            :disabled="!isEditing"
          />
        </label>

        <div class="error">{{ message }}</div>
        <div class="flex flex-col gap-2">
          <button class="button primary" v-if="isEditing && isRoleDifferent">
            <FolderArrowDownIcon class="size-6" />
            <span>Enregistrer les modifications</span>
          </button>
          <button v-else class="button" @click="$router.back()">
            <ChevronLeftIcon class="size-6" />
            <span>Retour Liste des utilisateurs</span>
          </button>
        </div>
      </form>
    </MainPage>
  </PageLayout>
</template>
