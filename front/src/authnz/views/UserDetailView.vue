<script setup lang="ts">
import { ChevronLeftIcon, FolderArrowDownIcon, PencilIcon } from '@heroicons/vue/24/outline'
import { onMounted, reactive, ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import { Gender, type User } from '../interfaces/User'
import { useUserStore } from '../stores/UserStore'
import PasswordInput from '@/widgets/components/forms/PasswordInput.vue'

const route = useRoute()
const userStore = useUserStore()

const user = reactive<User>({
  id: '',
  name: '',
  password: '',
  displayName: '',
  email: '',
  jobTitle: '',
  gender: undefined,
  phone: '',
  favorites: ['documentation/introduction'],
})

const originalUser = reactive<User>({
  id: '',
  name: '',
  password: '',
  displayName: '',
  email: '',
  jobTitle: '',
  gender: undefined,
  phone: '',
  favorites: ['documentation/introduction'],
})

const message = ref('')
const isEditing = ref(false)
const isUserDifferent = ref(false)

const check = () => {
  message.value = ''
  if (isEditing.value === false) {
    return
  }
  const originalUserStr = JSON.stringify(originalUser)
  const userStr = JSON.stringify(user)
  isUserDifferent.value = originalUserStr !== userStr
}

watch(user, check, { deep: true })

const selectEditMode = () => {
  message.value = ''
  isEditing.value = !isEditing.value
}

const onSubmit = async () => {
  try {
    message.value = ''
    await userStore.replace({ ...user })
    Object.assign(originalUser, user)
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
  if (userStore.users === undefined) {
    await userStore.refresh()
  }
  if (userStore.users === undefined) {
    return
  }
  const selectedUser = userStore.users.find((u) => u.name === name)
  if (selectedUser === undefined) {
    return
  }
  Object.assign(user, selectedUser)
  Object.assign(originalUser, selectedUser)
  check()
})
</script>

<template>
  <PageLayout>
    <HeaderPage>
      <h1>Détails d'un utilisateur</h1>
    </HeaderPage>
    <MainPage>
      <form @submit.prevent="onSubmit()" class="shrink-0">
        <nav>
          <button class="button" type="button" @click="selectEditMode()" title="Mode édition">
            <PencilIcon class="size-6" />
          </button>
        </nav>
        <div class="flex flex-wrap gap-4">
          <fieldset>
            <legend>Information de connexion</legend>
            <label>
              <span>Identifiant *</span>
              <input
                type="text"
                placeholder="Ex: admin"
                v-model="user.name"
                :disabled="!isEditing"
              />
              <span class="error">{{ '' }}</span>
            </label>
            <label>
              <span>Mot de passe *</span>
              <PasswordInput
                v-model="user.password"
                autocomplete="new-password"
                :disabled="!isEditing"
              />

              <span class="error">{{ '' }}</span>
            </label>
          </fieldset>
          <fieldset>
            <legend>Identité</legend>
            <label>
              <span>Mme./Mr.</span>
              <select name="" id="" autocomplete="off" v-model="user.gender" :disabled="!isEditing">
                <option :value="Gender.OTHER"></option>
                <option :value="Gender.FEMALE">Femme</option>
                <option :value="Gender.MALE">Homme</option>
              </select>
              <span class="error">{{ '' }}</span>
            </label>
            <label>
              <span>Nom d'affichage *</span>
              <input
                type="text"
                v-model="user.displayName"
                placeholder="Ex: Marcel DUPOND"
                :disabled="!isEditing"
              />
              <span class="error">{{ '' }}</span>
            </label>
            <label>
              <span>Email *</span>
              <input type="text" v-model="user.email" :disabled="!isEditing" />
              <span class="error">{{ '' }}</span>
            </label>
            <label>
              <span>Fonction</span>
              <input
                type="text"
                placeholder="Ex: Responsable DSI"
                v-model="user.jobTitle"
                :disabled="!isEditing"
              />
              <span class="error">{{ '' }}</span>
            </label>
          </fieldset>
        </div>

        <div class="error">{{ message }}</div>
        <div class="flex flex-col gap-2">
          <button class="button primary" v-if="isEditing && isUserDifferent">
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
