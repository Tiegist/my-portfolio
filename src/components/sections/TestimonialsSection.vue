<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { testimonials } from '@/data/portfolio'
import SectionHeading from '@/components/ui/SectionHeading.vue'

const currentIndex = ref(0)
let intervalId: ReturnType<typeof setInterval>

function next() {
  currentIndex.value = (currentIndex.value + 1) % testimonials.length
}

function prev() {
  currentIndex.value = (currentIndex.value - 1 + testimonials.length) % testimonials.length
}

function goTo(index: number) {
  currentIndex.value = index
}

onMounted(() => {
  intervalId = setInterval(next, 6000)
})

onUnmounted(() => {
  clearInterval(intervalId)
})
</script>

<template>
  <section id="testimonials" class="section-padding relative overflow-hidden">
    <div class="pointer-events-none absolute inset-0" aria-hidden="true">
      <div class="absolute bottom-0 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-indigo-500/5 blur-[100px]" />
    </div>

    <div class="container-max relative">
      <SectionHeading
        label="Testimonials"
        title="What People Say"
        subtitle="Feedback from clients and colleagues"
        align="center"
      />

      <div class="relative mx-auto max-w-3xl">
        <Transition
          mode="out-in"
          enter-active-class="transition duration-500 ease-out"
          enter-from-class="opacity-0 translate-x-8"
          enter-to-class="opacity-100 translate-x-0"
          leave-active-class="transition duration-300 ease-in"
          leave-from-class="opacity-100 translate-x-0"
          leave-to-class="opacity-0 -translate-x-8"
        >
          <div
            :key="currentIndex"
            class="glass rounded-2xl p-8 md:p-12"
          >
            <!-- Quote icon -->
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="currentColor" class="mb-6 text-indigo-500/30"><path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/></svg>

            <blockquote class="text-lg leading-relaxed text-[var(--text-secondary)] md:text-xl">
              "{{ testimonials[currentIndex]?.content }}"
            </blockquote>

            <div class="mt-8 flex items-center gap-4">
              <div class="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-indigo-500 to-violet-600 text-lg font-bold text-white">
                {{ testimonials[currentIndex]?.avatar }}
              </div>
              <div>
                <p class="font-display font-semibold">{{ testimonials[currentIndex]?.name }}</p>
                <p class="text-sm text-[var(--text-muted)]">
                  {{ testimonials[currentIndex]?.role }} · {{ testimonials[currentIndex]?.company }}
                </p>
              </div>
            </div>
          </div>
        </Transition>

        <!-- Navigation -->
        <div class="mt-8 flex items-center justify-center gap-4">
          <button
            class="flex h-10 w-10 items-center justify-center rounded-full glass transition-colors hover:border-[var(--accent)]"
            aria-label="Previous testimonial"
            @click="prev"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m15 18-6-6 6-6"/></svg>
          </button>

          <div class="flex gap-2">
            <button
              v-for="(_, index) in testimonials"
              :key="index"
              class="h-2 rounded-full transition-all duration-300"
              :class="index === currentIndex ? 'w-8 bg-[var(--accent)]' : 'w-2 bg-[var(--border)]'"
              :aria-label="`Go to testimonial ${index + 1}`"
              @click="goTo(index)"
            />
          </div>

          <button
            class="flex h-10 w-10 items-center justify-center rounded-full glass transition-colors hover:border-[var(--accent)]"
            aria-label="Next testimonial"
            @click="next"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m9 18 6-6-6-6"/></svg>
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.font-display {
  font-family: var(--font-display);
}
</style>
