<script setup lang="ts">
import { achievements } from '@/data/portfolio'
import SectionHeading from '@/components/ui/SectionHeading.vue'
import AnimatedCounter from '@/components/ui/AnimatedCounter.vue'
</script>

<template>
  <section id="achievements" class="section">
    <div v-reveal class="container-page">
      <SectionHeading
        title="Achievements"
        subtitle="Numbers that reflect dedication and growth."
      />

      <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <AnimatedCounter
          v-for="achievement in achievements"
          :key="achievement.label"
          :value="achievement.value"
          :suffix="achievement.suffix"
          :label="achievement.label"
        />
      </div>
    </div>
  </section>
</template>
