<script lang="ts" setup>
import MenuContent from '@/authnz/components/MenuContent.vue'
</script>

<template>
  <div class="flex grow gap-2">
    <MenuPage>
      <MenuContent />
    </MenuPage>
    <main class="flex grow items-start justify-center">
      <router-view></router-view>
    </main>
  </div>
</template>
