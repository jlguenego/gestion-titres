<script setup lang="ts">
import type { New } from '@/interfaces/utilities'
import { PlusIcon } from '@heroicons/vue/24/outline'
import { reactive, ref } from 'vue'
import { useRouter } from 'vue-router'
import SelectItems from '../components/SelectItems.vue'
import type { Privilege } from '../interfaces/Privilege'
import { readOnlyFunctionalities, mutationFunctionalities } from '../misc/functionalities'
import { usePrivilegeStore } from '../stores/PrivilegeStore'

const router = useRouter()
const privilegeStore = usePrivilegeStore()

const newPrivilege = reactive<New<Privilege>>({
  name: '',
  description: '',
  readOnlyFunctionalities: [],
  mutationFunctionalities: [],
})

const errorMsg = ref('')

const onSubmit = async () => {
  try {
    errorMsg.value = ''
    await privilegeStore.add({ ...newPrivilege })
    router.push('/privileges')
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
      <h1>Ajout d'un nouveau privilège</h1>
    </HeaderPage>
    <MainPage>
      <form @submit.prevent="onSubmit()">
        <div class="flex flex-wrap gap-4">
          <label>
            <span>Nom *</span>
            <input type="text" placeholder="Ex: admin" v-model="newPrivilege.name" v-focus />
            <span class="error">{{ '' }}</span>
          </label>
          <label>
            <span>Description *</span>
            <input type="text" v-model="newPrivilege.description" autocomplete="new-password" />
            <span class="error">{{ '' }}</span>
          </label>
        </div>

        <SelectItems
          :items="readOnlyFunctionalities"
          v-model="newPrivilege.readOnlyFunctionalities"
        />
        <SelectItems
          :items="mutationFunctionalities"
          v-model="newPrivilege.mutationFunctionalities"
        />

        <div class="error">{{ errorMsg }}</div>
        <button class="primary">
          <PlusIcon class="size-6" />
          <span>Ajouter</span>
        </button>
      </form>
    </MainPage>
  </PageLayout>
</template>
