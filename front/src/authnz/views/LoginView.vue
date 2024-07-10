<script setup lang="ts">
import { ArrowRightEndOnRectangleIcon } from '@heroicons/vue/24/solid'
import { useRouter } from 'vue-router'

const router = useRouter()

const onSubmit = () => {
  router.push('/welcome')
}
</script>

<template>
  <main class="flex grow items-center justify-center">
    <div class="page max-w-96">
      <h1>Connexion</h1>
      <form @submit.prevent="onSubmit()">
        <label>
          <span>Identifiant</span>
          <input type="text" placeholder="Ex: admin" />
          <span class="error">{{ '' }}</span>
        </label>
        <label>
          <span>Mot de passe</span>
          <input type="password" />
          <span class="error">{{ '' }}</span>
        </label>
        <div class="error">{{ '' }}</div>
        <button class="primary">
          <ArrowRightEndOnRectangleIcon class="size-6" />
          <span>Se connecter</span>
        </button>
      </form>
    </div>
  </main>
</template>
