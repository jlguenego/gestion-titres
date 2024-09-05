<script lang="ts" setup></script>

<template>
  <div class="no-scrollbar w-full grow overflow-auto">
    <div class="flex h-full flex-col items-center justify-between">
      <main class="flex flex-col gap-2 p-4">
        <slot></slot>
      </main>
      <footer class="flex items-center justify-center self-stretch bg-gray-100 p-2 text-gray-500">
        <div>@ JLG Consulting - 2024</div>
      </footer>
    </div>
  </div>
</template>
