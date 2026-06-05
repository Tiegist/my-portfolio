<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { site } from '@/data/portfolio'
import { useThemeStore } from '@/stores/theme'

withDefaults(
  defineProps<{
    size?: 'sm' | 'md' | 'lg'
  }>(),
  { size: 'md' },
)

const themeStore = useThemeStore()
const { mode } = storeToRefs(themeStore)

const sizeConfig = {
  sm: { img: 'h-7', pad: 'px-2 py-0.5' },
  md: { img: 'h-9', pad: 'px-2.5 py-1' },
  lg: { img: 'h-11', pad: 'px-3 py-1.5' },
}
</script>

<template>
  <div
    class="logo-wrap inline-flex items-center"
    :class="[
      sizeConfig[size].pad,
      mode === 'light'
        ? 'rounded-lg bg-black shadow-md ring-1 ring-black/10'
        : 'rounded-md',
    ]"
  >
    <img
      :src="site.logo"
      :alt="site.logoAlt"
      class="logo-img w-auto max-w-[7.5rem] object-contain sm:max-w-[9rem] md:max-w-none"
      :class="[sizeConfig[size].img, mode === 'dark' ? 'logo-img--dark' : 'logo-img--light']"
      width="200"
      height="48"
      loading="eager"
      draggable="false"
    />
  </div>
</template>

<style scoped>
/*
  Dark mode: blend away the PNG's black background into the page.
  Light mode: render normally inside the black wrapper above.
*/
.logo-img--dark {
  mix-blend-mode: lighten;
  filter: brightness(1.05) contrast(1.05);
}

.logo-img--light {
  mix-blend-mode: normal;
  filter: none;
}
</style>
