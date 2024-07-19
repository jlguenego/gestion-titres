<script setup lang="ts">
import type { New } from '@/interfaces/utilities'
import { PlusIcon } from '@heroicons/vue/24/outline'
import { reactive, ref } from 'vue'
import { useRouter } from 'vue-router'
import { Gender, type User } from '../interfaces/User'
import { useUserStore } from '../stores/UserStore'

const router = useRouter()
const userStore = useUserStore()

const newUser = reactive<New<User>>({
  name: '',
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
    await userStore.add({ ...newUser })
    router.replace('/users')
  } catch (err) {
    if (err instanceof Error) {
      errorMsg.value = err.message
    }
  }
}
</script>

<template>
  <PageLayout>
    <HeaderPage>
      <h1>Ajout d'un nouvel utilisateur</h1>
    </HeaderPage>
    <MainPage>
      <form @submit.prevent="onSubmit()">
        <div class="flex flex-wrap gap-4">
          <fieldset>
            <legend>Information de connexion</legend>
            <label>
              <span>Identifiant *</span>
              <input type="text" placeholder="Ex: admin" v-model="newUser.name" v-focus />
              <span class="error">{{ '' }}</span>
            </label>
            <label>
              <span>Mot de passe *</span>
              <input type="password" v-model="newUser.password" autocomplete="new-password" />
              <span class="error">{{ '' }}</span>
            </label>
          </fieldset>
          <fieldset>
            <legend>Identité</legend>
            <label>
              <span>Mme./Mr.</span>
              <select name="" id="" autocomplete="off" v-model="newUser.gender">
                <option :value="Gender.OTHER" default></option>
                <option :value="Gender.FEMALE">Femme</option>
                <option :value="Gender.MALE">Homme</option>
              </select>
              <span class="error">{{ '' }}</span>
            </label>
            <label>
              <span>Nom d'affichage *</span>
              <input
                type="text"
                v-model="newUser.displayName"
                placeholder="Ex: Marcel DUPOND"
                autocomplete="off"
              />
              <span class="error">{{ '' }}</span>
            </label>
            <label>
              <span>Email *</span>
              <input type="text" v-model="newUser.email" />
              <span class="error">{{ '' }}</span>
            </label>
            <label>
              <span>Fonction</span>
              <input type="text" placeholder="Ex: Responsable DSI" v-model="newUser.jobTitle" />
              <span class="error">{{ '' }}</span>
            </label>
          </fieldset>
        </div>

        <div class="error">{{ errorMsg }}</div>
        <button class="button primary">
          <PlusIcon class="size-6" />
          <span>Ajouter</span>
        </button>
      </form>
    </MainPage>
  </PageLayout>
</template>
