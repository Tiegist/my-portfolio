<script setup lang="ts">
import { timeline, type TimelineItem } from '@/data/portfolio'
import SectionHeading from '@/components/ui/SectionHeading.vue'
import TechBadge from '@/components/ui/TechBadge.vue'

const typeConfig: Record<TimelineItem['type'], { label: string; color: string; icon: string }> = {
  experience: { label: 'Experience', color: 'bg-indigo-500', icon: 'M20 7h-9M20 12h-9M20 17h-9M4 7h.01M4 12h.01M4 17h.01' },
  freelance: { label: 'Freelance', color: 'bg-violet-500', icon: 'M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2M16 3.128a4 4 0 0 1 0 7.744M22 21v-2a4 4 0 0 0-3-3.87' },
  project: { label: 'Project', color: 'bg-cyan-500', icon: 'M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z' },
  education: { label: 'Education', color: 'bg-emerald-500', icon: 'M22 10v6M2 10l10-5 10 5-10 5zM6 12v5c0 1.657 2.686 3 6 3s6-1.343 6-3v-5' },
}
</script>

<template>
  <section id="experience" class="section-padding relative">
    <div class="pointer-events-none absolute inset-0" aria-hidden="true">
      <div class="absolute left-1/4 top-1/2 h-96 w-96 -translate-y-1/2 rounded-full bg-violet-500/5 blur-[100px]" />
    </div>

    <div class="container-max relative">
      <SectionHeading
        label="Experience"
        title="Professional Journey"
        subtitle="My path through development, freelancing, and education"
        align="center"
      />

      <div class="relative mx-auto max-w-3xl">
        <!-- Timeline line -->
        <div
          class="absolute left-6 top-0 h-full w-0.5 bg-gradient-to-b from-indigo-500 via-violet-500 to-cyan-400 md:left-1/2 md:-translate-x-px"
          aria-hidden="true"
        />

        <div
          v-for="(item, index) in timeline"
          :key="item.id"
          v-motion
          :initial="{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }"
          :visible="{ opacity: 1, x: 0, transition: { duration: 500, delay: index * 150 } }"
          class="relative mb-12 flex items-start gap-8 md:gap-0"
          :class="index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'"
        >
          <!-- Dot -->
          <div
            class="absolute left-6 z-10 flex h-4 w-4 -translate-x-1/2 items-center justify-center rounded-full ring-4 ring-[var(--surface)] md:left-1/2"
            :class="typeConfig[item.type].color"
            aria-hidden="true"
          />

          <!-- Content -->
          <div
            class="ml-14 w-full md:ml-0 md:w-[calc(50%-2rem)]"
            :class="index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'"
          >
            <div
              class="glass group rounded-2xl p-6 transition-all duration-300 hover:border-[var(--accent)] hover:shadow-lg hover:shadow-indigo-500/10"
            >
              <div
                class="mb-3 flex items-center gap-2"
                :class="index % 2 === 0 ? 'md:justify-end' : ''"
              >
                <span
                  class="inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-medium text-white"
                  :class="typeConfig[item.type].color"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path :d="typeConfig[item.type].icon" />
                  </svg>
                  {{ typeConfig[item.type].label }}
                </span>
                <span class="font-mono text-xs text-[var(--text-muted)]">{{ item.period }}</span>
              </div>

              <h3 class="font-display text-lg font-bold">{{ item.title }}</h3>
              <p class="mt-1 text-sm font-medium text-[var(--accent-light)]">{{ item.organization }}</p>
              <p class="mt-3 text-sm leading-relaxed text-[var(--text-secondary)]">{{ item.description }}</p>

              <div
                v-if="item.technologies?.length"
                class="mt-4 flex flex-wrap gap-2"
                :class="index % 2 === 0 ? 'md:justify-end' : ''"
              >
                <TechBadge
                  v-for="tech in item.technologies"
                  :key="tech"
                  :label="tech"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
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
