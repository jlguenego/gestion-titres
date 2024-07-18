<script setup lang="ts">
import type { New } from '@/interfaces/utilities'
import { PlusIcon } from '@heroicons/vue/24/outline'
import { reactive, ref } from 'vue'
import { useRouter } from 'vue-router'
import type { Role } from '../interfaces/Role'
import { useRoleStore } from '../stores/RoleStore'

const router = useRouter()
const roleStore = useRoleStore()

const newRole = reactive<New<Role>>({
  name: '',
  description: '',
  privilegeIds: [],
})

const errorMsg = ref('')

const onSubmit = async () => {
  try {
    errorMsg.value = ''
    await roleStore.add({ ...newRole })
    router.replace('/roles')
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
          <label>
            <span>Nom *</span>
            <input type="text" placeholder="Ex: admin" v-model="newRole.name" v-focus />
            <span class="error">{{ '' }}</span>
          </label>
          <label>
            <span>Description *</span>
            <input type="text" v-model="newRole.description" />
            <span class="error">{{ '' }}</span>
          </label>
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
