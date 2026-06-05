<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { navLinks } from '@/data/portfolio'
import SiteLogo from '@/components/ui/SiteLogo.vue'
import { useThemeStore } from '@/stores/theme'
import { useScrollSpy, useSmoothScroll } from '@/composables/usePortfolio'

const themeStore = useThemeStore()
const { scrollTo } = useSmoothScroll()
const { activeSection } = useScrollSpy(navLinks.map((l) => l.id))

const isScrolled = ref(false)
const isMobileMenuOpen = ref(false)

function onScroll() {
  isScrolled.value = window.scrollY > 50
}

function handleNavClick(href: string) {
  scrollTo(href)
  isMobileMenuOpen.value = false
}

onMounted(() => {
  window.addEventListener('scroll', onScroll, { passive: true })
})

onUnmounted(() => {
  window.removeEventListener('scroll', onScroll)
})
</script>

<template>
  <header
    class="fixed inset-x-0 top-0 z-50 w-full max-w-full overflow-x-hidden px-3 sm:px-4 md:px-6"
    :class="isScrolled ? 'py-2 md:py-3' : 'py-3 md:py-5'"
  >
    <nav
      class="container-max mx-auto flex w-full max-w-full min-w-0 items-center justify-between gap-2 transition-all duration-500 md:gap-4"
      :class="isScrolled ? 'glass-strong rounded-2xl px-3 py-2.5 shadow-xl sm:px-4 md:px-6 md:py-3' : 'px-0'"
      aria-label="Main navigation"
    >
      <a
        href="#home"
        class="flex min-w-0 shrink items-center transition-opacity hover:opacity-90"
        @click.prevent="handleNavClick('#home')"
      >
        <SiteLogo responsive />
      </a>

      <!-- Desktop nav -->
      <ul class="hidden items-center gap-1 md:flex">
        <li v-for="link in navLinks" :key="link.id">
          <a
            :href="link.href"
            class="relative rounded-lg px-4 py-2 text-sm font-medium transition-colors duration-300"
            :class="
              activeSection === link.id
                ? 'text-[var(--accent-light)]'
                : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
            "
            @click.prevent="handleNavClick(link.href)"
          >
            {{ link.label }}
            <span
              v-if="activeSection === link.id"
              class="absolute bottom-0 left-1/2 h-0.5 w-4 -translate-x-1/2 rounded-full bg-[var(--accent)]"
            />
          </a>
        </li>
      </ul>

      <div class="flex shrink-0 items-center gap-2 md:gap-3">
        <button
          class="flex h-9 w-9 items-center justify-center rounded-xl glass transition-colors hover:border-[var(--accent)] md:h-10 md:w-10"
          :aria-label="themeStore.mode === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'"
          @click="themeStore.toggle()"
        >
          <svg v-if="themeStore.mode === 'dark'" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/></svg>
          <svg v-else xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/></svg>
        </button>

        <button
          class="flex h-9 w-9 items-center justify-center rounded-xl glass md:hidden md:h-10 md:w-10"
          :aria-expanded="isMobileMenuOpen"
          aria-label="Toggle menu"
          @click="isMobileMenuOpen = !isMobileMenuOpen"
        >
          <svg v-if="!isMobileMenuOpen" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>
          <svg v-else xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
        </button>
      </div>
    </nav>

    <!-- Mobile menu -->
    <Transition
      enter-active-class="transition duration-300 ease-out"
      enter-from-class="opacity-0 -translate-y-4"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition duration-200 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-4"
    >
      <div
        v-if="isMobileMenuOpen"
        class="glass-strong container-max mx-auto mt-2 w-full max-w-full rounded-2xl p-3 md:hidden"
      >
        <ul class="flex flex-col gap-1">
          <li v-for="link in navLinks" :key="link.id">
            <a
              :href="link.href"
              class="block rounded-lg px-4 py-3 text-sm font-medium transition-colors"
              :class="
                activeSection === link.id
                  ? 'bg-indigo-500/10 text-[var(--accent-light)]'
                  : 'text-[var(--text-secondary)]'
              "
              @click.prevent="handleNavClick(link.href)"
            >
              {{ link.label }}
            </a>
          </li>
        </ul>
      </div>
    </Transition>
  </header>
</template>

<style scoped>
.font-display {
  font-family: var(--font-display);
}
</style>
