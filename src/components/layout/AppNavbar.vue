<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { Menu, Moon, Sun, X } from 'lucide-vue-next'
import { navLinks, site } from '@/data/portfolio'
import SiteLogo from '@/components/ui/SiteLogo.vue'
import { useThemeStore } from '@/stores/theme'
import { useScrollSpy, useSmoothScroll } from '@/composables/usePortfolio'

const themeStore = useThemeStore()
const { scrollTo } = useSmoothScroll()
const { activeSection } = useScrollSpy(navLinks.map((l) => l.id))

const isScrolled = ref(false)
const isMenuOpen = ref(false)

function go(href: string) {
  scrollTo(href)
  isMenuOpen.value = false
}

function onScroll() {
  isScrolled.value = window.scrollY > 8
}

function onKeydown(e: KeyboardEvent) {
  if (e.key === 'Escape') isMenuOpen.value = false
}

function onResize() {
  if (window.innerWidth >= 768) isMenuOpen.value = false
}

onMounted(() => {
  window.addEventListener('scroll', onScroll, { passive: true })
  window.addEventListener('resize', onResize, { passive: true })
  document.addEventListener('keydown', onKeydown)
  onScroll()
})

onUnmounted(() => {
  window.removeEventListener('scroll', onScroll)
  window.removeEventListener('resize', onResize)
  document.removeEventListener('keydown', onKeydown)
})
</script>

<template>
  <header
    class="fixed inset-x-0 top-0 z-50 border-b bg-surface/85 backdrop-blur-md transition-colors duration-200"
    :class="isScrolled || isMenuOpen ? 'border-line' : 'border-transparent'"
  >
    <nav
      class="container-page flex h-16 items-center justify-between gap-4"
      aria-label="Main navigation"
    >
      <a
        href="#home"
        class="flex shrink-0 items-center"
        :aria-label="`${site.name} — back to top`"
        @click.prevent="go('#home')"
      >
        <SiteLogo responsive />
      </a>

      <ul class="hidden items-center gap-1 md:flex">
        <li v-for="link in navLinks" :key="link.id">
          <a
            :href="link.href"
            class="rounded-lg px-3 py-2 text-sm font-medium transition-colors"
            :class="activeSection === link.id ? 'text-link' : 'text-fg-soft hover:text-fg'"
            :aria-current="activeSection === link.id ? 'true' : undefined"
            @click.prevent="go(link.href)"
          >
            {{ link.label }}
          </a>
        </li>
      </ul>

      <div class="flex items-center gap-1">
        <button
          type="button"
          class="icon-btn"
          :aria-label="themeStore.mode === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'"
          @click="themeStore.toggle()"
        >
          <Sun v-if="themeStore.mode === 'dark'" :size="18" aria-hidden="true" />
          <Moon v-else :size="18" aria-hidden="true" />
        </button>

        <button
          type="button"
          class="icon-btn md:hidden"
          :aria-expanded="isMenuOpen"
          aria-controls="mobile-menu"
          :aria-label="isMenuOpen ? 'Close menu' : 'Open menu'"
          @click="isMenuOpen = !isMenuOpen"
        >
          <X v-if="isMenuOpen" :size="20" aria-hidden="true" />
          <Menu v-else :size="20" aria-hidden="true" />
        </button>
      </div>
    </nav>

    <div v-if="isMenuOpen" id="mobile-menu" class="border-t border-line md:hidden">
      <ul class="container-page flex flex-col py-2">
        <li v-for="link in navLinks" :key="link.id">
          <a
            :href="link.href"
            class="block py-3 text-base font-medium transition-colors"
            :class="activeSection === link.id ? 'text-link' : 'text-fg-soft hover:text-fg'"
            :aria-current="activeSection === link.id ? 'true' : undefined"
            @click.prevent="go(link.href)"
          >
            {{ link.label }}
          </a>
        </li>
      </ul>
    </div>
  </header>
</template>
