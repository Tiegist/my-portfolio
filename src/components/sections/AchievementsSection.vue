<script setup lang="ts">
import { achievements } from '@/data/portfolio'
import SectionHeading from '@/components/ui/SectionHeading.vue'
import AnimatedCounter from '@/components/ui/AnimatedCounter.vue'
</script>

<template>
  <section id="achievements" class="section-padding relative">
    <div class="container-max">
      <SectionHeading
        label="Achievements"
        title="Milestones & Impact"
        subtitle="Numbers that reflect dedication and growth"
        align="center"
      />

      <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <div
          v-for="(achievement, index) in achievements"
          :key="achievement.label"
          v-motion
          :initial="{ opacity: 0, scale: 0.9 }"
          :visible="{ opacity: 1, scale: 1, transition: { duration: 500, delay: index * 100 } }"
        >
          <AnimatedCounter
            :value="achievement.value"
            :suffix="achievement.suffix"
            :label="achievement.label"
          />
        </div>
      </div>
    </div>
  </section>
</template>
