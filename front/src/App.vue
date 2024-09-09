<script lang="ts" setup>
import { onMounted, ref } from 'vue'
import { database } from './authnz/data/database'
import { useUserStore } from './authnz/stores/UserStore'
import LoadingPage from './components/LoadingPage.vue'
import BodyLayout from './layout/BodyLayout.vue'
import FooterLayout from './layout/FooterLayout.vue'
import HeaderLayout from './layout/HeaderLayout.vue'
import { sleep } from './utils/misc'
import { usePrivilegeStore } from './authnz/stores/PrivilegeStore'
import { useGroupStore } from './authnz/stores/GroupStore'
import { useAuthenticationStore } from './authnz/stores/AuthenticationStore'

const userStore = useUserStore()
const privilegeStore = usePrivilegeStore()
const groupStore = useGroupStore()
const authenticationStore = useAuthenticationStore()

const isLoading = ref(true)

onMounted(async () => {
  try {
    await Promise.all([
      (async () => {
        if (userStore.users === undefined) {
          await database.init()
        }
        await userStore.refresh()
        await privilegeStore.refresh()
        await groupStore.refresh()
      })(),
      sleep(600),
    ])
    isLoading.value = false
  } catch (err) {
    alert(`error: ${err}`)
  }
})
</script>

<template>
  <LoadingPage v-if="isLoading" />
  <div v-else>
    <div role="none" class="fixed bottom-0 left-0 right-0 top-0 -z-50">
      <img
        src="/images/application/montceaux.jpg"
        class="flex h-screen w-screen object-cover"
        alt="Photo agréable du parc du château de Montceaux les Meaux"
      />
    </div>
    <div
      class="layout flex h-screen w-screen flex-col justify-between overflow-y-auto px-2 sm:px-4"
    >
      <HeaderLayout />
      <BodyLayout />
      <FooterLayout />
    </div>
  </div>
</template>
