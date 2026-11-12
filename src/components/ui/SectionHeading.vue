<script setup lang="ts">
defineProps<{
  title: string
  subtitle?: string
}>()
</script>

<template>
  <div class="mb-8 max-w-2xl md:mb-10">
    <h2 class="text-2xl font-bold tracking-tight text-fg md:text-3xl">
      {{ title }}
    </h2>
    <p v-if="subtitle" class="mt-2 text-fg-soft">
      {{ subtitle }}
    </p>
  </div>
</template>
