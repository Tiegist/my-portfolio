<script setup lang="ts">
import { skillCategories } from '@/data/portfolio'
import SectionHeading from '@/components/ui/SectionHeading.vue'
import TechBadge from '@/components/ui/TechBadge.vue'
</script>

<template>
  <section id="skills" class="section">
    <div v-reveal class="container-page">
      <SectionHeading title="Skills" subtitle="Technologies and practices I work with." />

      <dl class="divide-y divide-line border-y border-line">
        <div
          v-for="category in skillCategories"
          :key="category.id"
          class="grid gap-3 py-5 md:grid-cols-[14rem_1fr] md:gap-6"
        >
          <dt class="text-sm font-medium text-fg md:pt-1">{{ category.title }}</dt>
          <dd>
            <ul class="flex flex-wrap gap-2">
              <li v-for="skill in category.skills" :key="skill">
                <TechBadge :label="skill" />
              </li>
            </ul>
          </dd>
        </div>
      </dl>
    </div>
  </section>
</template>
