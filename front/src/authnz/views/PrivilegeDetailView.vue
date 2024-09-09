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
import type { Privilege } from '../interfaces/Privilege'
import { mutationPermissions, readOnlyPermissions } from '../misc/permissions'
import { usePrivilegeStore } from '../stores/PrivilegeStore'

const route = useRoute()
const router = useRouter()
const privilegeStore = usePrivilegeStore()

const privilege = reactive<Privilege>({
  id: '',
  name: '',
  description: '',
  readOnlyPermissions: [],
  mutationPermissions: [],
})

const originalPrivilege = reactive<Privilege>({
  id: '',
  name: '',
  description: '',
  readOnlyPermissions: [],
  mutationPermissions: [],
})

const message = ref('')
const isEditing = ref(false)
const isPrivilegeDifferent = ref(false)

const check = () => {
  console.log('check')
  message.value = ''
  if (isEditing.value === false) {
    return
  }
  const originalPrivilegeStr = JSON.stringify(originalPrivilege)
  const privilegeStr = JSON.stringify(privilege)
  isPrivilegeDifferent.value = originalPrivilegeStr !== privilegeStr
}

watch(privilege, check, { deep: true })

const selectEditMode = () => {
  message.value = ''
  isEditing.value = !isEditing.value
}

const handleRemove = async () => {
  console.log('privilege.id: ', privilege.id)

  await privilegeStore.remove([privilege.id])
  await router.replace('/privileges')
}

const onSubmit = async () => {
  try {
    message.value = ''
    await privilegeStore.replace({ ...privilege })
    Object.assign(originalPrivilege, clone(privilege))
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
  const name = route.params.name
  if (privilegeStore.privileges === undefined) {
    await privilegeStore.refresh()
  }
  if (privilegeStore.privileges === undefined) {
    return
  }
  const selectedPrivilege = privilegeStore.privileges.find((u) => u.name === name)
  if (selectedPrivilege === undefined) {
    return
  }
  Object.assign(privilege, clone(selectedPrivilege))
  Object.assign(originalPrivilege, clone(selectedPrivilege))
  check()
})
</script>

<template>
  <PageLayout>
    <HeaderPage>
      <h1>Détails du privilège {{ privilege.name }}</h1>
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
            <input
              type="text"
              placeholder="Ex: admin"
              v-model="privilege.name"
              :disabled="!isEditing"
            />
            <span class="error">{{ '' }}</span>
          </label>
          <label>
            <span>Description *</span>
            <input
              type="text"
              v-model="privilege.description"
              autocomplete="new-password"
              :disabled="!isEditing"
            />
            <span class="error">{{ '' }}</span>
          </label>
        </div>

        <label>
          <span>
            Permissions avec accès base de données en
            <span class="font-bold">lecture seule</span>
          </span>
          <SelectItems
            :items="readOnlyPermissions"
            v-model="privilege.readOnlyPermissions"
            :disabled="!isEditing"
          />
        </label>
        <label>
          <span>
            Permissions avec accès base de données en <span class="font-bold">écriture</span>
          </span>
          <SelectItems
            :items="mutationPermissions"
            v-model="privilege.mutationPermissions"
            :disabled="!isEditing"
          />
        </label>

        <div class="error">{{ message }}</div>
        <div class="flex flex-col gap-2">
          <button class="button primary" v-if="isEditing && isPrivilegeDifferent">
            <FolderArrowDownIcon class="size-6" />
            <span>Enregistrer les modifications</span>
          </button>
          <button
            v-if="
              !(isEditing && isPrivilegeDifferent) &&
              $router.options.history.state.back === '/privileges'
            "
            class="button"
            @click="$router.back()"
          >
            <ChevronLeftIcon class="size-6" />
            <span>Retour Liste des privilèges</span>
          </button>
        </div>
      </form>
    </MainPage>
  </PageLayout>
</template>
