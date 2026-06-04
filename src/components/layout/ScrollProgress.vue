<script setup lang="ts">
import { useScrollProgress } from '@/composables/usePortfolio'

const { progress } = useScrollProgress()
</script>

<template>
  <div
    class="fixed left-0 top-0 z-[60] h-0.5 bg-gradient-to-r from-indigo-500 via-violet-500 to-cyan-400 transition-[width] duration-100"
    :style="{ width: `${progress}%` }"
    role="progressbar"
    :aria-valuenow="Math.round(progress)"
    aria-valuemin="0"
    aria-valuemax="100"
    aria-label="Page scroll progress"
  />
</template>
