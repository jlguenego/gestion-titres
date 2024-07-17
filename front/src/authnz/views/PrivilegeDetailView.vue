<script setup lang="ts">
import { clone } from '@/utils/misc'
import { ChevronLeftIcon, FolderArrowDownIcon, PencilIcon } from '@heroicons/vue/24/outline'
import { onMounted, reactive, ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import type { Privilege } from '../interfaces/Privilege'
import { mutationFunctionalities, readOnlyFunctionalities } from '../misc/functionalities'
import { usePrivilegeStore } from '../stores/PrivilegeStore'

const route = useRoute()
const privilegeStore = usePrivilegeStore()

const privilege = reactive<Privilege>({
  id: '',
  name: '',
  description: '',
  readOnlyFunctionalities: [],
  mutationFunctionalities: [],
})

const originalPrivilege = reactive<Privilege>({
  id: '',
  name: '',
  description: '',
  readOnlyFunctionalities: [],
  mutationFunctionalities: [],
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
      <h1>Détail du privilège {{ privilege.name }}</h1>
    </HeaderPage>
    <MainPage>
      <form @submit.prevent="onSubmit()">
        <nav>
          <button class="button" type="button" @click="selectEditMode()" title="Mode édition">
            <PencilIcon class="size-6" />
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
          <span
            >Fonctionalité avec accès base de donnée en <span class="font-bold">lecture seule</span>
          </span>
          <SelectItems
            :items="readOnlyFunctionalities"
            v-model="privilege.readOnlyFunctionalities"
            :disabled="!isEditing"
          />
        </label>
        <label>
          <span
            >Fonctionalité avec accès base de donnée en <span class="font-bold">écriture</span>
          </span>
          <SelectItems
            :items="mutationFunctionalities"
            v-model="privilege.mutationFunctionalities"
            :disabled="!isEditing"
          />
        </label>

        <div class="error">{{ message }}</div>
        <div class="flex flex-col gap-2">
          <button class="button primary" v-if="isEditing && isPrivilegeDifferent">
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
