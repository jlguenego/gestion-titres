<script setup lang="ts">
import { PencilIcon } from '@heroicons/vue/24/outline'
import { onMounted, reactive, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { Gender, type User } from '../interfaces/User'
import { useUserStore } from '../stores/UserStore'

const router = useRouter()
const route = useRoute()
const userStore = useUserStore()

const user = reactive<User>({
  id: '',
  username: '',
  password: '',
  displayName: '',
  email: '',
  jobTitle: '',
  gender: undefined,
  phone: '',
})

const errorMsg = ref('')
const isEditing = ref(false)

const selectEditMode = () => {
  isEditing.value = !isEditing.value
}

const onSubmit = async () => {
  try {
    errorMsg.value = ''
    await userStore.replace({ ...user })
    router.push('/users')
  } catch (err) {
    if (err instanceof Error) {
      errorMsg.value = err.message
    }
  }
}

onMounted(async () => {
  const username = route.params.username
  console.log('username: ', username)
  if (userStore.users === undefined) {
    await userStore.refresh()
  }
  if (userStore.users === undefined) {
    return
  }
  const selectedUser = userStore.users.find((u) => u.username === username)
  console.log('selectedUser: ', selectedUser)
  Object.assign(user, selectedUser)
  console.log('finished loaded user', user)
})
</script>

<template>
  <PageLayout>
    <HeaderPage>
      <h1>Détail d'un utilisateur</h1>
    </HeaderPage>
    <MainPage>
      <form @submit.prevent="onSubmit()">
        <nav>
          <button type="button" @click="selectEditMode()">
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
                v-model="user.username"
                :disabled="!isEditing"
              />
              <span class="error">{{ '' }}</span>
            </label>
            <label>
              <span>Mot de passe *</span>
              <input
                type="password"
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

        <div class="error">{{ errorMsg }}</div>
        <div class="flex h-12 flex-col">
          <button class="primary" v-if="isEditing">
            <PencilIcon class="size-6" />
            <span>Modifier</span>
          </button>
        </div>
      </form>
    </MainPage>
  </PageLayout>
</template>
