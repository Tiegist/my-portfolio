<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const props = defineProps<{
  value: number
  suffix?: string
  label: string
}>()

const count = ref(0)
const elementRef = ref<HTMLElement | null>(null)
let animated = false

function animate() {
  if (animated) return
  animated = true

  const startTime = performance.now()
  const duration = 2000

  function step(currentTime: number) {
    const elapsed = currentTime - startTime
    const progress = Math.min(elapsed / duration, 1)
    const eased = 1 - Math.pow(1 - progress, 3)
    count.value = Math.floor(eased * props.value)

    if (progress < 1) {
      requestAnimationFrame(step)
    } else {
      count.value = props.value
    }
  }

  requestAnimationFrame(step)
}

onMounted(() => {
  if (!elementRef.value) return

  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry?.isIntersecting) {
        animate()
        observer.disconnect()
      }
    },
    { threshold: 0.3 },
  )

  observer.observe(elementRef.value)
  onUnmounted(() => observer.disconnect())
})
</script>

<template>
  <div ref="elementRef" class="card p-6">
    <p class="font-display text-3xl font-bold text-fg md:text-4xl">
      {{ count }}{{ suffix }}
    </p>
    <p class="mt-2 text-sm text-fg-muted">{{ label }}</p>
  </div>
</template>
