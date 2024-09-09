<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'
import { getGroups } from '../misc/user'
import { useAuthenticationStore } from '../stores/AuthenticationStore'

const authenticationStore = useAuthenticationStore()
const user = authenticationStore.needUser()
const router = useRouter()

const handleLogout = async () => {
  await authenticationStore.logout()
  await router.replace('/')
}

const groupList = ref<string>('')

onMounted(async () => {
  const groups = await getGroups(user)
  groupList.value = groups.map((g) => g.name).join(', ')
})
</script>

<template>
  <PageLayout class="self-stretch">
    <HeaderPage>
      <h1>{{ user.displayName }}</h1>
    </HeaderPage>
    <MainPage>
      <p>
        Groupes : <span class="font-bold">{{ groupList }}</span>
      </p>

      <button class="button danger" @click="handleLogout()">Se déconnecter</button>
    </MainPage>
  </PageLayout>
</template>
