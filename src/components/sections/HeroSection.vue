<script setup lang="ts">
import { profile, site } from '@/data/portfolio'
import { useTypedText } from '@/composables/usePortfolio'
import AppButton from '@/components/ui/AppButton.vue'
import ParticleBackground from '@/components/effects/ParticleBackground.vue'

const { displayText } = useTypedText(profile.roles)
</script>

<template>
  <section
    id="home"
    class="relative flex min-h-screen items-center overflow-hidden section-padding pt-32"
  >
    <ParticleBackground />

    <!-- Gradient mesh -->
    <div class="pointer-events-none absolute inset-0 z-0" aria-hidden="true">
      <div
        class="absolute -left-1/4 top-1/4 h-[600px] w-[600px] rounded-full opacity-30 blur-[120px]"
        style="background: var(--mesh-1)"
      />
      <div
        class="absolute -right-1/4 bottom-1/4 h-[500px] w-[500px] rounded-full opacity-20 blur-[100px]"
        style="background: var(--mesh-2)"
      />
      <div
        class="absolute left-1/2 top-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-15 blur-[80px]"
        style="background: var(--mesh-3)"
      />
    </div>

    <div class="container-max relative z-10 grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
      <div>
        <p
          v-motion
          :initial="{ opacity: 0, y: 30 }"
          :enter="{ opacity: 1, y: 0, transition: { duration: 600 } }"
          class="mb-4 font-mono text-sm uppercase tracking-[0.3em] text-[var(--accent-light)]"
        >
          Welcome to {{ site.name }}
        </p>

        <h1
          v-motion
          :initial="{ opacity: 0, y: 30 }"
          :enter="{ opacity: 1, y: 0, transition: { duration: 600, delay: 100 } }"
          class="font-display text-4xl font-bold leading-tight tracking-tight md:text-5xl lg:text-6xl xl:text-7xl"
        >
          Hi, I'm a
          <br />
          <span class="text-gradient">{{ displayText }}</span>
          <span class="animate-pulse-glow text-[var(--accent)]">|</span>
        </h1>

        <p
          v-motion
          :initial="{ opacity: 0, y: 30 }"
          :enter="{ opacity: 1, y: 0, transition: { duration: 600, delay: 200 } }"
          class="mt-6 max-w-xl text-lg leading-relaxed text-[var(--text-secondary)] md:text-xl"
        >
          {{ profile.tagline }}
        </p>

        <div
          v-motion
          :initial="{ opacity: 0, y: 30 }"
          :enter="{ opacity: 1, y: 0, transition: { duration: 600, delay: 300 } }"
          class="mt-10 flex flex-wrap gap-4"
        >
          <AppButton href="#projects" variant="primary" size="lg">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 3h6v6"/><path d="M10 14 21 3"/><path d="M18 13v6a2 2 0 0 1-2 2H5a2  2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/></svg>
            View Projects
          </AppButton>
          <AppButton :href="profile.cvUrl" variant="secondary" size="lg" external>
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="15" y2="3"/></svg>
            Download CV
          </AppButton>
          <AppButton href="#contact" variant="outline" size="lg">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21.2 8.4c.5.38.8.97.8 1.6v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V10a2 2 0 0 1 .8-1.6l8-6a2 2 0 0 1 2.4 0l8 6Z"/><path d="m22 10-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 10"/></svg>
            Contact Me
          </AppButton>
        </div>

        <!-- Tech stack pills -->
        <div
          v-motion
          :initial="{ opacity: 0 }"
          :enter="{ opacity: 1, transition: { duration: 600, delay: 500 } }"
          class="mt-12 flex flex-wrap gap-3"
        >
          <span
            v-for="tech in ['Vue.js', 'Laravel', 'PHP', 'MySQL', 'Tailwind']"
            :key="tech"
            class="rounded-full border border-[var(--border)] bg-white/5 px-4 py-1.5 text-xs font-medium text-[var(--text-secondary)]"
          >
            {{ tech }}
          </span>
        </div>
      </div>

      <!-- Avatar -->
      <div
        v-motion
        :initial="{ opacity: 0, scale: 0.8 }"
        :enter="{ opacity: 1, scale: 1, transition: { duration: 800, delay: 200 } }"
        class="relative mx-auto flex justify-center lg:justify-end"
      >
        <div class="relative">
          <div class="absolute inset-0 animate-pulse-glow rounded-full bg-gradient-to-r from-indigo-500 to-violet-600 opacity-30 blur-3xl" />
          <div class="glass-strong relative rounded-full p-2 glow-accent animate-float">
            <div class="relative h-64 w-64 overflow-hidden rounded-full md:h-80 md:w-80 lg:h-96 lg:w-96">
              <img
                :src="profile.avatar"
                :alt="`${profile.name} profile photo`"
                class="h-full w-full object-cover"
                width="384"
                height="384"
                loading="eager"
              />
              <div class="absolute inset-0 rounded-full ring-2 ring-indigo-500/30 ring-offset-4 ring-offset-[var(--surface)]" />
            </div>
          </div>

          <!-- Floating badges -->
          <div class="absolute -left-4 top-1/4 glass rounded-xl px-4 py-2 text-sm font-medium shadow-xl md:-left-8">
            <span class="text-[var(--accent-light)]">2+</span>
            <span class="ml-1 text-[var(--text-secondary)]">Years Exp.</span>
          </div>
          <div class="absolute -right-4 bottom-1/4 glass rounded-xl px-4 py-2 text-sm font-medium shadow-xl md:-right-8">
            <span class="text-cyan-400">10+</span>
            <span class="ml-1 text-[var(--text-secondary)]">Projects</span>
          </div>
        </div>
      </div>
    </div>

    <!-- Scroll indicator -->
    <div class="absolute bottom-8 left-1/2 z-10 -translate-x-1/2">
      <a
        href="#about"
        class="flex flex-col items-center gap-2 text-[var(--text-muted)] transition-colors hover:text-[var(--accent-light)]"
        aria-label="Scroll to about section"
      >
        <span class="text-xs uppercase tracking-widest">Scroll</span>
        <div class="h-10 w-6 rounded-full border-2 border-current p-1">
          <div class="mx-auto h-2 w-1 animate-bounce rounded-full bg-current" />
        </div>
      </a>
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
