<script setup lang="ts">
import { RouterView } from 'vue-router'
import AppNavbar from '@/components/layout/AppNavbar.vue'
import AppFooter from '@/components/layout/AppFooter.vue'
import ScrollProgress from '@/components/layout/ScrollProgress.vue'
import BackToTop from '@/components/layout/BackToTop.vue'
import CustomCursor from '@/components/layout/CustomCursor.vue'
</script>

<template>
  <div class="relative min-h-screen bg-[var(--surface)]">
    <ScrollProgress />
    <CustomCursor />
    <AppNavbar />

    <main>
      <RouterView v-slot="{ Component }">
        <Transition
          mode="out-in"
          enter-active-class="transition duration-500 ease-out"
          enter-from-class="opacity-0"
          enter-to-class="opacity-100"
          leave-active-class="transition duration-300 ease-in"
          leave-from-class="opacity-100"
          leave-to-class="opacity-0"
        >
          <component :is="Component" />
        </Transition>
      </RouterView>
    </main>

    <AppFooter />
    <BackToTop />
  </div>
</template>
