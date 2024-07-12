<script setup lang="ts">
import { ArrowRightEndOnRectangleIcon } from '@heroicons/vue/24/outline'
import { useRouter } from 'vue-router'
import { useAuthenticationStore } from '../AuthenticationStore'
import { reactive, ref } from 'vue'
import type { UserCredentials } from '../interfaces/UserCredentials'

const router = useRouter()
const authenticationStore = useAuthenticationStore()

const data = reactive<UserCredentials>({
  username: '',
  password: '',
})

const errorMsg = ref('')

const onSubmit = async () => {
  try {
    errorMsg.value = ''
    await authenticationStore.login(data)
    router.push('/welcome')
  } catch (err) {
    if (err instanceof Error) {
      errorMsg.value = err.message
    }
  }
}
</script>

<template>
  <main class="flex grow items-center justify-center">
    <div class="page max-w-96">
      <h1>Ajout d'un nouvel utilisateur</h1>
      <form @submit.prevent="onSubmit()">
        <label>
          <span>Identifiant</span>
          <input type="text" placeholder="Ex: admin" v-model="data.username" />
          <span class="error">{{ '' }}</span>
        </label>
        <label>
          <span>Mot de passe</span>
          <input type="password" v-model="data.password" />
          <span class="error">{{ '' }}</span>
        </label>
        <div class="error">{{ errorMsg }}</div>
        <button class="primary">
          <ArrowRightEndOnRectangleIcon class="size-6" />
          <span>Se connecter</span>
        </button>
      </form>
    </div>
  </main>
</template>
