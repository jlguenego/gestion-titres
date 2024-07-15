<script lang="ts" setup>
import { useMenuStore } from '@/layout/stores/MenuStore'
import { Bars3Icon, UserIcon } from '@heroicons/vue/24/outline'
import { useAuthenticationStore } from '../stores/AuthenticationStore'
import { useRoute, useRouter } from 'vue-router'

const authenticationStore = useAuthenticationStore()
const menuStore = useMenuStore()
const route = useRoute()
const router = useRouter()

const handleToggleMenu = () => {
  menuStore.openMenu()
  if (route.path === '/') {
    router.push('/welcome')
  }
}
</script>

<template>
  <button v-if="authenticationStore.user" @click="handleToggleMenu()" class="layout p-2 sm:px-4">
    <Bars3Icon class="size-6" />
    <UserIcon class="size-6" />
    <span class="hidden sm:inline">{{ authenticationStore.user.displayName }}</span>
  </button>
</template>
