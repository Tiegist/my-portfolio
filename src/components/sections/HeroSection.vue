<script setup lang="ts">
import { Download } from 'lucide-vue-next'
import { profile } from '@/data/portfolio'
import { useSmoothScroll } from '@/composables/usePortfolio'
import AppButton from '@/components/ui/AppButton.vue'
import SocialLinks from '@/components/ui/SocialLinks.vue'

const { scrollTo } = useSmoothScroll()
</script>

<template>
  <section id="home" class="relative overflow-hidden pb-12 pt-28 md:pb-16 md:pt-40">
    <div class="hero-glow" aria-hidden="true" />

    <div class="container-page relative">
      <div class="max-w-3xl">
        <div class="flex items-center gap-3">
          <img
            :src="profile.avatar"
            alt=""
            width="48"
            height="48"
            class="h-12 w-12 shrink-0 rounded-full border border-line object-cover"
          />
          <div>
            <p class="text-fg-soft">
              Hi, I'm <span class="font-medium text-fg">{{ profile.name }}</span>
            </p>
            <p class="text-sm text-fg-muted">{{ profile.location }}</p>
          </div>
        </div>

        <h1 class="mt-6 text-4xl font-bold leading-[1.1] tracking-tight text-fg sm:text-5xl lg:text-6xl">
          {{ profile.title }}
        </h1>

        <p class="mt-5 max-w-2xl text-lg leading-relaxed text-fg-soft md:text-xl">
          {{ profile.tagline }}
        </p>

        <div class="mt-8 flex flex-wrap items-center gap-3">
          <AppButton href="#projects" @click.prevent="scrollTo('#projects')">
            View projects
          </AppButton>
          <AppButton :href="profile.cvUrl" variant="secondary" external>
            <Download :size="18" aria-hidden="true" />
            Download CV
          </AppButton>
          <SocialLinks class="sm:ml-2" />
        </div>
      </div>
    </div>
  </section>
</template>
