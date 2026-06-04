<script setup lang="ts">
defineProps<{
  label: string
  color?: string
}>()
</script>

<template>
  <span
    class="inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium transition-colors duration-300"
    :class="color ?? 'border-indigo-500/30 bg-indigo-500/10 text-indigo-300'"
  >
    {{ label }}
  </span>
</template>
