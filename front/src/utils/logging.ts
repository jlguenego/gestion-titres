import { useAuthenticationStore } from '@/authnz/stores/AuthenticationStore'

export const log = (...args: unknown[]) => {
  const authStore = useAuthenticationStore()
  const now = new Date().toISOString()
  const user = authStore.user ? authStore.user.displayName : 'not_connected'

  // you can implement this to send data to server.
  console.log(`%clog`, 'font-weight: bold', now, user, ...args)
}
