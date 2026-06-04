<script setup lang="ts">
defineProps<{
  label?: string
  title: string
  subtitle?: string
  align?: 'left' | 'center'
}>()
</script>

<template>
  <div
    class="mb-10"
    :class="align === 'center' ? 'text-center' : 'text-left'"
  >
    <p
      v-if="label"
      v-motion
      :initial="{ opacity: 0, y: 20 }"
      :visible="{ opacity: 1, y: 0, transition: { duration: 500 } }"
      class="mb-3 font-mono text-sm uppercase tracking-[0.2em] text-[var(--accent-light)]"
    >
      {{ label }}
    </p>
    <h2
      v-motion
      :initial="{ opacity: 0, y: 20 }"
      :visible="{ opacity: 1, y: 0, transition: { duration: 500, delay: 100 } }"
      class="font-display text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl"
    >
      {{ title }}
    </h2>
    <p
      v-if="subtitle"
      v-motion
      :initial="{ opacity: 0, y: 20 }"
      :visible="{ opacity: 1, y: 0, transition: { duration: 500, delay: 200 } }"
      class="mt-4 max-w-2xl text-lg text-[var(--text-secondary)]"
      :class="align === 'center' ? 'mx-auto' : ''"
    >
      {{ subtitle }}
    </p>
    <div
      v-motion
      :initial="{ scaleX: 0 }"
      :visible="{ scaleX: 1, transition: { duration: 600, delay: 300 } }"
      class="mt-6 h-1 w-16 origin-left rounded-full bg-gradient-to-r from-[var(--accent)] to-cyan-400"
      :class="align === 'center' ? 'mx-auto origin-center' : ''"
    />
  </div>
</template>

<style scoped>
.font-display {
  font-family: var(--font-display);
}
.font-mono {
  font-family: var(--font-mono);
}
</style>
