<script setup lang="ts">
import { ref } from 'vue'
import { skillCategories } from '@/data/portfolio'
import SectionHeading from '@/components/ui/SectionHeading.vue'

const activeCategory = ref(skillCategories[0]?.id ?? '')
const hoveredSkill = ref<string | null>(null)

const categoryIcons: Record<string, string> = {
  frontend: 'M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5',
  backend: 'M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10',
  database: 'M12 2C6.48 2 2 4.02 2 6.5v11C2 19.98 6.48 22 12 22s10-2.02 10-4.5v-11C22 4.02 17.52 2 12 2z',
  tools: 'M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z',
}

function getProficiencyColor(proficiency: number) {
  if (proficiency >= 90) return 'from-emerald-500 to-cyan-400'
  if (proficiency >= 75) return 'from-indigo-500 to-violet-500'
  return 'from-amber-500 to-orange-400'
}
</script>

<template>
  <section id="skills" class="section-padding relative">
    <div class="pointer-events-none absolute inset-0 opacity-30" aria-hidden="true">
      <div class="absolute right-0 top-0 h-96 w-96 rounded-full bg-indigo-500/10 blur-[100px]" />
    </div>

    <div class="container-max relative">
      <SectionHeading
        label="Skills"
        title="Technical Arsenal"
        subtitle="Technologies I use to bring ideas to life"
        align="center"
      />

      <!-- Category tabs -->
      <div class="mb-12 flex flex-wrap justify-center gap-3">
        <button
          v-for="category in skillCategories"
          :key="category.id"
          class="flex items-center gap-2 rounded-xl px-5 py-2.5 text-sm font-medium transition-all duration-300"
          :class="
            activeCategory === category.id
              ? 'bg-gradient-to-r from-indigo-500 to-violet-600 text-white shadow-lg shadow-indigo-500/25'
              : 'glass text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
          "
          @click="activeCategory = category.id"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path :d="categoryIcons[category.id]" />
          </svg>
          {{ category.title }}
        </button>
      </div>

      <!-- Skills grid -->
      <Transition
        mode="out-in"
        enter-active-class="transition duration-400 ease-out"
        enter-from-class="opacity-0 translate-y-4"
        enter-to-class="opacity-100 translate-y-0"
        leave-active-class="transition duration-200 ease-in"
        leave-from-class="opacity-100"
        leave-to-class="opacity-0"
      >
        <div
          :key="activeCategory"
          class="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
        >
          <div
            v-for="(skill, index) in skillCategories.find((c) => c.id === activeCategory)?.skills"
            :key="skill.name"
            v-motion
            :initial="{ opacity: 0, y: 20 }"
            :enter="{ opacity: 1, y: 0, transition: { duration: 400, delay: index * 80 } }"
            class="glass group cursor-default rounded-2xl p-6 transition-all duration-300 hover:border-[var(--accent)] hover:shadow-lg hover:shadow-indigo-500/10"
            @mouseenter="hoveredSkill = skill.name"
            @mouseleave="hoveredSkill = null"
          >
            <div class="mb-4 flex items-center justify-between">
              <h3 class="font-display text-lg font-semibold">{{ skill.name }}</h3>
              <span
                class="font-mono text-sm font-bold transition-colors"
                :class="hoveredSkill === skill.name ? 'text-[var(--accent-light)]' : 'text-[var(--text-muted)]'"
              >
                {{ skill.proficiency }}%
              </span>
            </div>

            <!-- Progress bar -->
            <div class="neu-inset h-2 overflow-hidden rounded-full">
              <div
                class="h-full rounded-full bg-gradient-to-r transition-all duration-700 ease-out"
                :class="getProficiencyColor(skill.proficiency)"
                :style="{ width: `${skill.proficiency}%` }"
              />
            </div>

            <!-- Circular chart on hover -->
            <div class="mt-4 flex justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <svg width="60" height="60" viewBox="0 0 60 60" aria-hidden="true">
                <circle cx="30" cy="30" r="24" fill="none" stroke="var(--border)" stroke-width="4" />
                <circle
                  cx="30"
                  cy="30"
                  r="24"
                  fill="none"
                  stroke="url(#skillGradient)"
                  stroke-width="4"
                  stroke-linecap="round"
                  :stroke-dasharray="`${skill.proficiency * 1.508} 150.8`"
                  transform="rotate(-90 30 30)"
                  class="transition-all duration-700"
                />
                <defs>
                  <linearGradient id="skillGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stop-color="#6366f1" />
                    <stop offset="100%" stop-color="#22d3ee" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>
        </div>
      </Transition>
    </div>
  </section>
</template>

<style scoped>
.font-display {
  font-family: var(--font-display);
}
.font-mono {
  font-family: var(--font-mono);
}
</style>
