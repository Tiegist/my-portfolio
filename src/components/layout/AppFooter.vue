<script setup lang="ts">
import { ArrowUp } from 'lucide-vue-next'
import { site } from '@/data/portfolio'
import { useSmoothScroll } from '@/composables/usePortfolio'

const { scrollTo } = useSmoothScroll()
</script>

<template>
  <footer class="border-t border-line">
    <div
      class="container-page flex flex-col items-center justify-between gap-3 py-8 text-sm text-fg-muted sm:flex-row"
    >
      <p>&copy; {{ new Date().getFullYear() }} {{ site.name }} · Built with Vue 3 &amp; Tailwind CSS</p>
      <a href="#home" class="link-muted" @click.prevent="scrollTo('#home')">
        Back to top
        <ArrowUp :size="16" aria-hidden="true" />
      </a>
    </div>
  </footer>
</template>
