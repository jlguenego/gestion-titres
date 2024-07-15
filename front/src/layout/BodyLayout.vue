<script lang="ts" setup></script>

<template>
  <div class="flex grow gap-2">
    <MenuPage>
      <div>content</div>
    </MenuPage>
    <main class="flex grow items-start justify-center">
      <router-view></router-view>
    </main>
  </div>
</template>
