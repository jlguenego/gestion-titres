<script setup lang="ts">
import type { New } from '@/interfaces/utilities'
import { PlusIcon } from '@heroicons/vue/24/outline'
import { reactive, ref } from 'vue'
import { useRouter } from 'vue-router'
import type { Group } from '../interfaces/Group'
import { useGroupStore } from '../stores/GroupStore'

const router = useRouter()
const groupStore = useGroupStore()

const newGroup = reactive<New<Group>>({
  name: '',
  description: '',
  privilegeIds: [],
  userIds: [],
})

const errorMsg = ref('')

const onSubmit = async () => {
  try {
    errorMsg.value = ''
    await groupStore.add({ ...newGroup })
    router.replace('/groups')
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
            <input type="text" placeholder="Ex: admin" v-model="newGroup.name" v-focus />
            <span class="error">{{ '' }}</span>
          </label>
          <label>
            <span>Description *</span>
            <input type="text" v-model="newGroup.description" />
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
