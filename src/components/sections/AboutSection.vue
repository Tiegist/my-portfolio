<script setup lang="ts">
import { profile, stats } from '@/data/portfolio'
import SectionHeading from '@/components/ui/SectionHeading.vue'
</script>

<template>
  <section id="about" class="section">
    <div v-reveal class="container-page">
      <SectionHeading title="About" />

      <div class="max-w-3xl space-y-4 leading-relaxed text-fg-soft md:text-lg">
        <p v-for="paragraph in profile.about" :key="paragraph">
          {{ paragraph }}
        </p>
      </div>

      <dl class="mt-10 grid grid-cols-2 gap-x-6 gap-y-8 border-t border-line pt-8 md:grid-cols-4">
        <div v-for="stat in stats" :key="stat.label" class="flex flex-col-reverse gap-1">
          <dt class="text-sm text-fg-muted">{{ stat.label }}</dt>
          <dd class="font-display text-3xl font-bold text-fg md:text-4xl">
            {{ stat.value }}{{ stat.suffix }}
          </dd>
        </div>
      </dl>
    </div>
  </section>
</template>
