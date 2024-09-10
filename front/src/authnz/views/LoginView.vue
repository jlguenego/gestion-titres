<script setup lang="ts">
import { useMenuPageStore } from '@/layout/stores/MenuPageStore'
import { isDesktop } from '@/utils/responsive'
import { ArrowRightEndOnRectangleIcon } from '@heroicons/vue/24/outline'
import { reactive, ref } from 'vue'
import { useRouter } from 'vue-router'
import type { UserCredentials } from '../interfaces/UserCredentials'
import { useAuthenticationStore } from '../stores/AuthenticationStore'

const router = useRouter()
const authenticationStore = useAuthenticationStore()
const menuPageStore = useMenuPageStore()

const data = reactive<UserCredentials>({
  username: '',
  password: '',
})

const errorMsg = ref('')

const onSubmit = async () => {
  try {
    errorMsg.value = ''
    await authenticationStore.login(data)
    await router.replace(authenticationStore.redirectPath)
    if (isDesktop()) {
      menuPageStore.openMenu()
    }
  } catch (err) {
    if (err instanceof Error) {
      errorMsg.value = err.message
    }
  }
}
</script>

<template>
  <PageLayout class="max-w-96">
    <HeaderPage :menu="false">
      <h1>Connexion</h1>
    </HeaderPage>
    <MainPage>
      <form @submit.prevent="onSubmit()">
        <label>
          <span>Identifiant</span>
          <input type="text" placeholder="Ex: admin" v-model="data.username" />
          <span class="error">{{ '' }}</span>
        </label>
        <label>
          <span>Mot de passe</span>
          <PasswordInput v-model="data.password" />
          <span class="error">{{ '' }}</span>
        </label>
        <div class="error">{{ errorMsg }}</div>
        <button class="button primary">
          <ArrowRightEndOnRectangleIcon class="size-6" />
          <span>Se connecter</span>
        </button>
      </form>
    </MainPage>
  </PageLayout>
</template>
