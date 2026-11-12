<script setup lang="ts">
import { ref } from 'vue'
import { Download } from 'lucide-vue-next'
import { education, experience, profile, type TimelineItem } from '@/data/portfolio'
import SectionHeading from '@/components/ui/SectionHeading.vue'
import TechBadge from '@/components/ui/TechBadge.vue'
import AppButton from '@/components/ui/AppButton.vue'
import AppModal from '@/components/ui/AppModal.vue'

const groups = [
  { title: 'Work', items: experience },
  { title: 'Education & training', items: education },
]

const selected = ref<TimelineItem | null>(null)
const isModalOpen = ref(false)

function openDocument(item: TimelineItem) {
  selected.value = item
  isModalOpen.value = true
}
</script>

<template>
  <section id="experience" class="section">
    <div v-reveal class="container-page">
      <SectionHeading title="Experience" subtitle="Where I've worked and studied." />

      <div class="space-y-10">
        <div v-for="group in groups" :key="group.title">
          <h3 class="text-sm font-medium uppercase tracking-wider text-fg-muted">
            {{ group.title }}
          </h3>

          <ol class="mt-3 divide-y divide-line border-y border-line">
            <li
              v-for="item in group.items"
              :key="item.id"
              class="grid gap-2 py-6 md:grid-cols-[14rem_1fr] md:gap-6"
            >
              <p class="text-sm text-fg-muted md:pt-0.5">{{ item.period }}</p>

              <div>
                <h4 class="font-semibold text-fg">{{ item.title }}</h4>
                <p class="mt-0.5 flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-fg-soft">
                  {{ item.organization }}
                  <span
                    v-if="item.highlight"
                    class="rounded-full bg-accent-soft px-2 py-0.5 text-xs font-medium text-link"
                  >
                    {{ item.highlight }}
                  </span>
                </p>

                <p class="mt-3 text-sm leading-relaxed text-fg-soft md:text-base">
                  {{ item.description }}
                </p>

                <ul v-if="item.technologies?.length" class="mt-4 flex flex-wrap gap-2">
                  <li v-for="tech in item.technologies" :key="tech">
                    <TechBadge :label="tech" />
                  </li>
                </ul>

                <button
                  v-if="item.document"
                  type="button"
                  class="link -mb-1.5 mt-2.5 text-sm"
                  @click="openDocument(item)"
                >
                  {{ item.document.label }}
                </button>
              </div>
            </li>
          </ol>
        </div>
      </div>

      <AppButton :href="profile.cvUrl" variant="secondary" external class="mt-8">
        <Download :size="18" aria-hidden="true" />
        Download CV
      </AppButton>
    </div>

    <AppModal
      :open="isModalOpen"
      :title="selected?.title ?? ''"
      :subtitle="selected ? `${selected.organization} · ${selected.period}` : undefined"
      @close="isModalOpen = false"
    >
      <img
        v-if="selected?.document"
        :src="selected.document.image"
        :alt="`${selected.title} document`"
        class="w-full rounded-xl border border-line"
      />
    </AppModal>
  </section>
</template>
