<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { useMousePosition } from '@/composables/usePortfolio'

const { x, y } = useMousePosition()
const visible = ref(false)
const dotRef = ref<HTMLDivElement | null>(null)
const ringRef = ref<HTMLDivElement | null>(null)

let ringX = 0
let ringY = 0
let frameId = 0

function animateRing() {
  ringX += (x.value - ringX) * 0.15
  ringY += (y.value - ringY) * 0.15

  if (dotRef.value) {
    dotRef.value.style.transform = `translate(${x.value}px, ${y.value}px)`
  }
  if (ringRef.value) {
    ringRef.value.style.transform = `translate(${ringX}px, ${ringY}px)`
  }

  frameId = requestAnimationFrame(animateRing)
}

function checkDevice() {
  visible.value =
    window.matchMedia('(pointer: fine)').matches &&
    !window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

onMounted(() => {
  checkDevice()
  if (visible.value) {
    document.body.style.cursor = 'none'
    animateRing()
  }
  window.addEventListener('resize', checkDevice)
})

onUnmounted(() => {
  cancelAnimationFrame(frameId)
  document.body.style.cursor = ''
  window.removeEventListener('resize', checkDevice)
})
</script>

<template>
  <div v-if="visible" class="pointer-events-none fixed inset-0 z-[9999]" aria-hidden="true">
    <div
      ref="ringRef"
      class="absolute -ml-5 -mt-5 h-10 w-10 rounded-full border border-indigo-400/50 transition-[width,height] duration-200"
    />
    <div
      ref="dotRef"
      class="absolute -ml-1 -mt-1 h-2 w-2 rounded-full bg-indigo-400"
    />
  </div>
</template>
