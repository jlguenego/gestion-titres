<script setup lang="ts">
import type { New } from '@/interfaces/utilities'
import { PlusIcon } from '@heroicons/vue/24/outline'
import { reactive, ref } from 'vue'
import { useRouter } from 'vue-router'
import type { Privilege } from '../interfaces/Privilege'
import { functionalities } from '../misc/functionalities'
import { usePrivilegeStore } from '../stores/PrivilegeStore'
import type { Functionality } from '../interfaces/Functionality'

const router = useRouter()
const privilegeStore = usePrivilegeStore()

const newPrivilege = reactive<New<Privilege>>({
  name: '',
  description: '',
  functionalities: [],
})

const errorMsg = ref('')

const toggleFunctionality = async (f: Functionality) => {
  const functionalities = newPrivilege.functionalities
  const index = functionalities.indexOf(f.id)
  if (index !== -1) {
    functionalities.splice(index, 1)
    return
  }
  functionalities.push(f.id)
}

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

        <ul class="flex flex-wrap gap-2 rounded-lg border border-gray-400 p-2">
          <li
            v-for="f in functionalities"
            :key="f.id"
            @click="toggleFunctionality(f)"
            class="item-selectable"
            :class="{ selected: newPrivilege.functionalities.includes(f.id) }"
          >
            {{ f.name }}
          </li>
        </ul>

        <div class="error">{{ errorMsg }}</div>
        <button class="primary">
          <PlusIcon class="size-6" />
          <span>Ajouter</span>
        </button>
      </form>
    </MainPage>
  </PageLayout>
</template>
