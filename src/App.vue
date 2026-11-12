<script setup lang="ts">
import { RouterView } from 'vue-router'
import AppNavbar from '@/components/layout/AppNavbar.vue'
import AppFooter from '@/components/layout/AppFooter.vue'
</script>

<template>
  <div class="min-h-screen overflow-x-clip bg-surface">
    <AppNavbar />

    <main class="min-h-screen">
      <RouterView />
    </main>

    <AppFooter />
  </div>
</template>
