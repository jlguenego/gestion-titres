<script setup lang="ts">
import type { New } from '@/interfaces/utilities'
import { PlusIcon } from '@heroicons/vue/24/outline'
import { reactive, ref } from 'vue'
import { useRouter } from 'vue-router'
import type { Privilege } from '../interfaces/Privilege'
import { readOnlyPermissions, mutationPermissions } from '../misc/permissions'
import { usePrivilegeStore } from '../stores/PrivilegeStore'

const router = useRouter()
const privilegeStore = usePrivilegeStore()

const newPrivilege = reactive<New<Privilege>>({
  name: '',
  description: '',
  readOnlyPermissions: [],
  mutationPermissions: [],
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

        <label>
          <span>
            Permissions avec accès base de donnée en <span class="font-bold">lecture seule</span>
          </span>
          <SelectItems :items="readOnlyPermissions" v-model="newPrivilege.readOnlyPermissions" />
        </label>
        <label>
          <span>
            Permissions avec accès base de donnée en <span class="font-bold">écriture</span>
          </span>
          <SelectItems :items="mutationPermissions" v-model="newPrivilege.mutationPermissions" />
        </label>

        <div class="error">{{ errorMsg }}</div>
        <button class="button primary">
          <PlusIcon class="size-6" />
          <span>Ajouter</span>
        </button>
      </form>
    </MainPage>
  </PageLayout>
</template>
