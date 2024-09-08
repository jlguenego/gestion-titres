<script setup lang="ts">
import PageLayout from '@/layout/page/PageLayout.vue'
import { computed, ref } from 'vue'
import { useRoute } from 'vue-router'
import { menuDoc } from '../utils/menuDoc'
import { getMenuItem } from '@/modules/help/utils/favorites'

const route = useRoute()
const path = ref(route.fullPath.replace(/\/documentation\/menu\//, ''))
const label = computed(() => {
  return getMenuItem(path.value).label
})
</script>

<template>
  <PageLayout class="self-stretch">
    <HeaderPage>
      <h1>Documentation - {{ label }}</h1>
    </HeaderPage>

    <MainPage>
      <h1>Documentation - {{ label }}</h1>

      <component :is="menuDoc[path] ?? menuDoc['not_defined']" />
    </MainPage>
  </PageLayout>
</template>
