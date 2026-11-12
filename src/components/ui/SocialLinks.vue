<script setup lang="ts">
import { profile } from '@/data/portfolio'
import GithubIcon from '@/components/icons/GithubIcon.vue'
import LinkedinIcon from '@/components/icons/LinkedinIcon.vue'
import TelegramIcon from '@/components/icons/TelegramIcon.vue'

const links = [
  { label: 'GitHub', href: profile.github, icon: GithubIcon },
  { label: 'LinkedIn', href: profile.linkedin, icon: LinkedinIcon },
  { label: 'Telegram', href: profile.telegram, icon: TelegramIcon },
]
</script>

<template>
  <ul class="flex items-center gap-1">
    <li v-for="link in links" :key="link.label">
      <a
        :href="link.href"
        target="_blank"
        rel="noopener noreferrer"
        class="icon-btn"
        :aria-label="link.label"
        :title="link.label"
      >
        <component :is="link.icon" :size="18" />
      </a>
    </li>
  </ul>
</template>
