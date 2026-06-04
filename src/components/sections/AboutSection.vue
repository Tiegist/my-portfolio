<script setup lang="ts">
import { profile, stats } from '@/data/portfolio'
import SectionHeading from '@/components/ui/SectionHeading.vue'
import AnimatedCounter from '@/components/ui/AnimatedCounter.vue'
</script>

<template>
  <section id="about" class="section-padding relative">
    <div class="container-max">
      <SectionHeading
        label="About Me"
        title="Crafting Digital Excellence"
        subtitle="Passionate about building solutions that make a difference"
      />

      <div class="grid gap-12 lg:grid-cols-5 lg:gap-16">
        <div class="lg:col-span-3">
          <div
            v-motion
            :initial="{ opacity: 0, x: -30 }"
            :visible="{ opacity: 1, x: 0, transition: { duration: 600 } }"
            class="glass rounded-2xl p-8"
          >
            <p class="text-lg leading-relaxed text-[var(--text-secondary)]">
              {{ profile.about.intro }}
            </p>
            <p class="mt-6 leading-relaxed text-[var(--text-secondary)]">
              {{ profile.about.journey }}
            </p>
          </div>

          <div
            v-motion
            :initial="{ opacity: 0, x: -30 }"
            :visible="{ opacity: 1, x: 0, transition: { duration: 600, delay: 200 } }"
            class="mt-8 grid gap-6 sm:grid-cols-2"
          >
            <div class="glass rounded-2xl p-6">
              <h3 class="mb-4 flex items-center gap-2 font-display text-lg font-semibold">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="text-[var(--accent-light)]"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"/></svg>
                Expertise
              </h3>
              <ul class="space-y-2">
                <li
                  v-for="item in profile.about.expertise"
                  :key="item"
                  class="flex items-start gap-2 text-sm text-[var(--text-secondary)]"
                >
                  <span class="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--accent)]" />
                  {{ item }}
                </li>
              </ul>
            </div>

            <div class="glass rounded-2xl p-6">
              <h3 class="mb-4 flex items-center gap-2 font-display text-lg font-semibold">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="text-cyan-400"><path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"/></svg>
                Current Interests
              </h3>
              <ul class="space-y-2">
                <li
                  v-for="item in profile.about.interests"
                  :key="item"
                  class="flex items-start gap-2 text-sm text-[var(--text-secondary)]"
                >
                  <span class="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-400" />
                  {{ item }}
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div class="grid grid-cols-2 gap-4 lg:col-span-2 lg:grid-cols-1">
          <AnimatedCounter
            v-for="(stat, index) in stats"
            :key="stat.label"
            v-motion
            :initial="{ opacity: 0, y: 30 }"
            :visible="{ opacity: 1, y: 0, transition: { duration: 500, delay: index * 100 } }"
            :value="stat.value"
            :suffix="stat.suffix"
            :label="stat.label"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.font-display {
  font-family: var(--font-display);
}
</style>
