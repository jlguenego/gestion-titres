<script setup lang="ts">
import type { New } from '@/interfaces/utilities'
import { PlusIcon } from '@heroicons/vue/24/outline'
import { onMounted, reactive, ref } from 'vue'
import { useRouter } from 'vue-router'
import { Gender, type User } from '../interfaces/User'

const router = useRouter()

const data = reactive<New<User>>({
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
    router.push('/users')
  } catch (err) {
    if (err instanceof Error) {
      errorMsg.value = err.message
    }
  }
}

onMounted(() => {
  // data.username = ''
})
</script>

<template>
  <main class="flex grow items-center justify-center">
    <div class="page max-w-3xl">
      <h1>Ajout d'un nouvel utilisateur</h1>
      <form @submit.prevent="onSubmit()">
        <div class="flex flex-wrap gap-4">
          <fieldset>
            <legend>Information de connexion</legend>
            <label>
              <span>Identifiant *</span>
              <input type="text" placeholder="Ex: admin" v-model="data.username" v-focus />
              <span class="error">{{ '' }}</span>
            </label>
            <label>
              <span>Mot de passe *</span>
              <input type="password" v-model="data.password" autocomplete="new-password" />
              <span class="error">{{ '' }}</span>
            </label>
          </fieldset>
          <fieldset>
            <legend>Identité</legend>
            <label>
              <span>Mme./Mr.</span>
              <select name="" id="" autocomplete="off">
                <option :value="Gender.OTHER" default></option>
                <option :value="Gender.FEMALE">Femme</option>
                <option :value="Gender.FEMALE">Homme</option>
              </select>
              <span class="error">{{ '' }}</span>
            </label>
            <label>
              <span>Nom d'affichage *</span>
              <input
                type="text"
                v-model="data.displayName"
                placeholder="Ex: Marcel DUPOND"
                autocomplete="off"
              />
              <span class="error">{{ '' }}</span>
            </label>
            <label>
              <span>Email *</span>
              <input type="text" v-model="data.email" />
              <span class="error">{{ '' }}</span>
            </label>
            <label>
              <span>Fonction</span>
              <input type="text" placeholder="Ex: Responsable DSI" v-model="data.jobTitle" />
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
