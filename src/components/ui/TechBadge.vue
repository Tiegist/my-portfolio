<script setup lang="ts">
defineProps<{
  label: string
}>()
</script>

<template>
  <span class="inline-flex items-center rounded-full bg-chip px-2.5 py-1 text-xs font-medium text-fg-soft">
    {{ label }}
  </span>
</template>
