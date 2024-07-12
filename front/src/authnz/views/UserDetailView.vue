<script setup lang="ts">
import { PlusIcon } from '@heroicons/vue/24/outline'
import { onMounted, reactive, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { Gender, type User } from '../interfaces/User'
import { useUserStore } from '../UserStore'

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

const onSubmit = async () => {
  try {
    errorMsg.value = ''
    await userStore.add({ ...user })
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
  <main class="flex grow items-center justify-center">
    <div class="page max-w-3xl">
      <h1>Détail d'un utilisateur</h1>
      <form @submit.prevent="onSubmit()" readonly>
        <div class="flex flex-wrap gap-4">
          <fieldset>
            <legend>Information de connexion</legend>
            <label>
              <span>Identifiant *</span>
              <input type="text" placeholder="Ex: admin" v-model="user.username" v-focus />
              <span class="error">{{ '' }}</span>
            </label>
            <label>
              <span>Mot de passe *</span>
              <input type="password" v-model="user.password" autocomplete="new-password" />
              <span class="error">{{ '' }}</span>
            </label>
          </fieldset>
          <fieldset>
            <legend>Identité</legend>
            <label>
              <span>Mme./Mr.</span>
              <select name="" id="" autocomplete="off" v-model="user.gender">
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
                autocomplete="off"
              />
              <span class="error">{{ '' }}</span>
            </label>
            <label>
              <span>Email *</span>
              <input type="text" v-model="user.email" />
              <span class="error">{{ '' }}</span>
            </label>
            <label>
              <span>Fonction</span>
              <input type="text" placeholder="Ex: Responsable DSI" v-model="user.jobTitle" />
              <span class="error">{{ '' }}</span>
            </label>
          </fieldset>
        </div>

        <div class="error">{{ errorMsg }}</div>
        <button class="primary">
          <PlusIcon class="size-6" />
          <span>Ajouter</span>
        </button>
      </form>
    </div>
  </main>
</template>
