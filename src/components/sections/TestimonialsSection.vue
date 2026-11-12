<script setup lang="ts">
import { testimonials } from '@/data/portfolio'
import SectionHeading from '@/components/ui/SectionHeading.vue'

function initials(name: string) {
  return name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part.charAt(0).toUpperCase())
    .join('')
}
</script>

<template>
  <section v-if="testimonials.length" id="testimonials" class="section">
    <div v-reveal class="container-page">
      <SectionHeading title="Testimonials" />

      <div class="grid gap-6" :class="testimonials.length > 1 ? 'md:grid-cols-2' : 'max-w-3xl'">
        <figure v-for="testimonial in testimonials" :key="testimonial.id" class="card p-6 md:p-8">
          <blockquote class="leading-relaxed text-fg-soft md:text-lg">
            “{{ testimonial.content }}”
          </blockquote>

          <figcaption class="mt-6 flex items-center gap-3">
            <img
              v-if="testimonial.avatar"
              :src="testimonial.avatar"
              alt=""
              width="44"
              height="44"
              class="h-11 w-11 shrink-0 rounded-full border border-line object-cover"
            />
            <span
              v-else
              class="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-accent-soft text-sm font-semibold text-link"
              aria-hidden="true"
            >
              {{ initials(testimonial.name) }}
            </span>
            <div>
              <p class="font-medium text-fg">{{ testimonial.name }}</p>
              <p class="text-sm text-fg-muted">{{ testimonial.role }} · {{ testimonial.company }}</p>
            </div>
          </figcaption>
        </figure>
      </div>
    </div>
  </section>
</template>
