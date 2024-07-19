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
import type { Group } from '../interfaces/Group'
import { usePrivilegeStore } from '../stores/PrivilegeStore'
import { useGroupStore } from '../stores/GroupStore'

const route = useRoute()
const router = useRouter()
const groupStore = useGroupStore()
const privilegeStore = usePrivilegeStore()

const privileges = ref<Privilege[]>([])

const group = reactive<Group>({
  id: '',
  name: '',
  description: '',
  privilegeIds: [],
})

const originalGroup = reactive<Group>({
  id: '',
  name: '',
  description: '',
  privilegeIds: [],
})

const message = ref('')
const isEditing = ref(false)
const isDifferent = ref(false)

const checkPrivilege = () => {
  console.log('checkPrivilege')
  message.value = ''
  if (isEditing.value === false) {
    return
  }
  group.privilegeIds = privileges.value.map((p) => p.id)
}

const checkGroup = () => {
  message.value = ''
  if (isEditing.value === false) {
    return
  }
  const originalGroupStr = JSON.stringify(originalGroup)
  const groupStr = JSON.stringify(group)
  isDifferent.value = originalGroupStr !== groupStr
}

watch(privileges, checkPrivilege, { deep: true })
watch(group, checkGroup, { deep: true })

const selectEditMode = () => {
  message.value = ''
  isEditing.value = !isEditing.value
}

const handleRemove = async () => {
  await groupStore.remove([group.id])
  await router.replace('/groups')
}

const onSubmit = async () => {
  try {
    message.value = ''
    await groupStore.replace({ ...group })
    Object.assign(originalGroup, clone(group))
    checkGroup()
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
  const privilegeList = privilegeStore.privileges

  const name = route.params.name
  if (groupStore.groups === undefined) {
    await groupStore.refresh()
  }
  if (groupStore.groups === undefined) {
    return
  }
  const selectedGroup = groupStore.groups.find((u) => u.name === name)
  if (selectedGroup === undefined) {
    return
  }
  Object.assign(group, clone(selectedGroup))
  Object.assign(originalGroup, clone(selectedGroup))
  privileges.value = group.privilegeIds.map((id) => {
    const privilege = privilegeList.find((p) => p.id === id)
    if (privilege === undefined) {
      throw new Error('should not happen')
    }
    return privilege
  })
})
</script>

<template>
  <PageLayout v-if="privilegeStore.privileges">
    <HeaderPage>
      <h1>Détails du groupe {{ group.name }}</h1>
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
              v-model="group.name"
              :disabled="!isEditing"
            />
            <span class="error">{{ '' }}</span>
          </label>
          <label>
            <span>Description *</span>
            <input
              type="text"
              v-model="group.description"
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
          <button class="button primary" v-if="isEditing && isDifferent">
            <FolderArrowDownIcon class="size-6" />
            <span>Enregistrer les modifications</span>
          </button>
          <button
            v-if="!(isEditing && isDifferent) && $router.options.history.state.back === '/groups'"
            class="button"
            @click="$router.back()"
          >
            <ChevronLeftIcon class="size-6" />
            <span>Retour Liste des groupes</span>
          </button>
        </div>
      </form>
    </MainPage>
  </PageLayout>
</template>
