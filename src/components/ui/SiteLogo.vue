<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { site } from '@/data/portfolio'
import { useThemeStore } from '@/stores/theme'

const props = withDefaults(
  defineProps<{
    size?: 'sm' | 'md' | 'lg'
    responsive?: boolean
  }>(),
  {
    size: 'md',
    responsive: false,
  },
)

const themeStore = useThemeStore()
const { mode } = storeToRefs(themeStore)

const sizeConfig = {
  sm: { img: 'h-7', pad: 'px-2 py-0.5', maxW: 'max-w-[7.5rem] sm:max-w-[9rem]' },
  md: { img: 'h-9', pad: 'px-2.5 py-1', maxW: 'max-w-[9rem] md:max-w-none' },
  lg: { img: 'h-11', pad: 'px-3 py-1.5', maxW: 'max-w-none' },
}

const config = sizeConfig[props.size]
</script>

<template>
  <div
    class="logo-wrap inline-flex items-center"
    :class="[
      responsive ? 'px-2 py-0.5 md:px-2.5 md:py-1' : config.pad,
      mode === 'light'
        ? 'rounded-lg bg-black shadow-md ring-1 ring-black/10'
        : 'rounded-md',
    ]"
  >
    <img
      :src="site.logo"
      :alt="site.logoAlt"
      class="logo-img w-auto object-contain"
      :class="[
        responsive
          ? 'h-7 max-w-[7.5rem] sm:max-w-[9rem] md:h-9 md:max-w-none'
          : [config.img, config.maxW],
        mode === 'dark' ? 'logo-img--dark' : 'logo-img--light',
      ]"
      width="200"
      height="48"
      loading="eager"
      draggable="false"
    />
  </div>
</template>

<style scoped>
.logo-img--dark {
  mix-blend-mode: lighten;
  filter: brightness(1.05) contrast(1.05);
}

.logo-img--light {
  mix-blend-mode: normal;
  filter: none;
}
</style>
