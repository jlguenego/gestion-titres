<script lang="ts" setup>
const buildDate = BUILD_DATE
const version = VERSION
</script>

<template>
  <div class="no-scrollbar w-full grow overflow-auto">
    <div class="flex h-full flex-col items-center justify-between">
      <main class="flex max-w-2xl flex-col gap-2 p-4">
        <slot></slot>
      </main>
      <footer
        class="flex flex-wrap items-center justify-evenly gap-2 self-stretch bg-gray-100 text-gray-500"
      >
        <div class="p-2">Version : {{ version }} ({{ new Date(buildDate).toISOString() }})</div>
        <div class="p-2">@ JLG Consulting - 2024</div>
      </footer>
    </div>
  </div>
</template>
