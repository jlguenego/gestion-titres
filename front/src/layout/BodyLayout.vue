<script lang="ts" setup>
import MenuContent from '@/authnz/components/MenuContent.vue'
</script>

<template>
  <div class="flex h-[calc(100vh-6rem)] grow gap-2">
    <MenuPage>
      <MenuContent />
    </MenuPage>
    <main class="flex grow justify-center">
      <router-view></router-view>
    </main>
  </div>
</template>
