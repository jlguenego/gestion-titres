<script lang="ts" setup>
import { useMenuPageStore } from '@/layout/stores/MenuPageStore'
import { useResponsiveStore } from '@/stores/ResponsiveStore'
import { Bars3Icon, UserIcon } from '@heroicons/vue/24/outline'
import { useRouter } from 'vue-router'
import { useAuthenticationStore } from '../stores/AuthenticationStore'

const authenticationStore = useAuthenticationStore()
const menuPageStore = useMenuPageStore()
const router = useRouter()
const responsiveStore = useResponsiveStore()

const handleClick = () => {
  if (responsiveStore.isDesktop) {
    router.push('/current-user')
    return
  }
  menuPageStore.toggleMenu()
}
</script>

<template>
  <button v-if="authenticationStore.user" @click="handleClick()" class="button layout">
    <Bars3Icon class="size-6 sm:hidden" />
    <UserIcon class="hidden size-6 sm:inline" />
    <span class="hidden sm:inline">{{ authenticationStore.user.displayName }}</span>
  </button>
</template>
