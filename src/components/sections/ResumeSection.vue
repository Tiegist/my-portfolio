<script setup lang="ts">
import { ref } from 'vue'
import { profile, resumeSummary, skillCategories, certifications, timeline, type Certification, type TimelineItem } from '@/data/portfolio'
import SectionHeading from '@/components/ui/SectionHeading.vue'
import AppButton from '@/components/ui/AppButton.vue'
import AppModal from '@/components/ui/AppModal.vue'
import TechBadge from '@/components/ui/TechBadge.vue'

const education = timeline.filter((item) => item.type === 'education')
const allSkills = skillCategories.flatMap((cat) => cat.skills.map((s) => s.name))
const selectedCert = ref<Certification | null>(null)
const selectedEdu = ref<TimelineItem | null>(null)

function openCertificate(cert: Certification) {
  if (cert.image) selectedCert.value = cert
}

function closeCertificate() {
  selectedCert.value = null
}

function openEducation(edu: TimelineItem) {
  if (edu.image) selectedEdu.value = edu
}

function closeEducation() {
  selectedEdu.value = null
}
</script>

<template>
  <section id="resume" class="section-padding relative">
    <div class="container-max">
      <SectionHeading
        label="Resume"
        title="Professional Summary"
        subtitle="Download my CV or explore my qualifications"
        align="center"
      />

      <div class="grid gap-8 lg:grid-cols-3">
        <!-- Main resume card -->
        <div
          v-motion
          :initial="{ opacity: 0, y: 30 }"
          :visible="{ opacity: 1, y: 0, transition: { duration: 500 } }"
          class="glass lg:col-span-2 rounded-2xl p-8"
        >
          <div class="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <h3 class="font-display text-2xl font-bold">{{ profile.title }}</h3>
              <p class="mt-1 text-[var(--text-secondary)]">{{ profile.location }}</p>
            </div>
            <AppButton :href="profile.cvUrl" variant="primary" external>
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="15" y2="3"/></svg>
              Download CV
            </AppButton>
          </div>

          <div class="mt-8">
            <h4 class="font-display text-lg font-semibold">Summary</h4>
            <p class="mt-3 leading-relaxed text-[var(--text-secondary)]">{{ resumeSummary }}</p>
          </div>

          <div class="mt-8">
            <h4 class="font-display text-lg font-semibold">Skills Overview</h4>
            <div class="mt-4 flex flex-wrap gap-2">
              <TechBadge v-for="skill in allSkills" :key="skill" :label="skill" />
            </div>
          </div>

          <div class="mt-8">
            <h4 class="font-display text-lg font-semibold">Education & Training</h4>
            <div
              v-for="edu in education"
              :key="edu.id"
              class="mt-4 rounded-xl border border-[var(--border)] p-4"
            >
              <p class="font-semibold">{{ edu.title }}</p>
              <p class="text-sm text-[var(--accent-light)]">{{ edu.organization }}</p>
              <p class="mt-1 text-sm text-[var(--text-muted)]">{{ edu.period }}</p>
              <p class="mt-2 text-sm text-[var(--text-secondary)]">{{ edu.description }}</p>
              <div v-if="edu.technologies?.length" class="mt-3 flex flex-wrap gap-2">
                <TechBadge v-for="tech in edu.technologies" :key="tech" :label="tech" />
              </div>
              <button
                v-if="edu.image"
                type="button"
                class="mt-4 inline-flex items-center gap-2 text-sm font-medium text-[var(--accent-light)] transition-colors hover:text-[var(--accent)]"
                @click="openEducation(edu)"
              >
                View degree letter →
              </button>
            </div>
          </div>
        </div>

        <!-- Certifications sidebar -->
        <div
          v-motion
          :initial="{ opacity: 0, y: 30 }"
          :visible="{ opacity: 1, y: 0, transition: { duration: 500, delay: 200 } }"
          class="space-y-6"
        >
          <div class="glass rounded-2xl p-6">
            <h4 class="font-display text-lg font-semibold">Certifications</h4>
            <ul class="mt-4 space-y-5">
              <li
                v-for="cert in certifications"
                :key="cert.name"
                class="rounded-xl border border-[var(--border)] p-4 transition-colors hover:border-[var(--accent)]"
              >
                <button
                  v-if="cert.image"
                  type="button"
                  class="group mb-3 w-full overflow-hidden rounded-lg ring-1 ring-[var(--border)] transition-all hover:ring-[var(--accent)]"
                  @click="openCertificate(cert)"
                >
                  <img
                    :src="cert.image"
                    :alt="`${cert.name} certificate`"
                    class="w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                    loading="lazy"
                  />
                </button>

                <div class="flex items-start gap-3">
                  <div class="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-indigo-500/10">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="text-[var(--accent-light)]"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"/></svg>
                  </div>
                  <div class="min-w-0 flex-1">
                    <p class="text-sm font-semibold leading-snug">{{ cert.name }}</p>
                    <p class="mt-1 text-xs text-[var(--text-muted)]">{{ cert.issuer }} · {{ cert.year }}</p>
                    <span
                      v-if="cert.distinction"
                      class="mt-2 inline-flex rounded-full bg-amber-500/15 px-2.5 py-0.5 text-xs font-medium text-amber-400 ring-1 ring-amber-500/25"
                    >
                      {{ cert.distinction }}
                    </span>
                    <p v-if="cert.description" class="mt-2 text-xs leading-relaxed text-[var(--text-secondary)]">
                      {{ cert.description }}
                    </p>
                    <p v-if="cert.partners?.length" class="mt-2 text-xs text-[var(--text-muted)]">
                      In partnership with {{ cert.partners.join(' & ') }}
                    </p>
                    <button
                      v-if="cert.image"
                      type="button"
                      class="mt-2 text-xs font-medium text-[var(--accent-light)] transition-colors hover:text-[var(--accent)]"
                      @click="openCertificate(cert)"
                    >
                      View full certificate →
                    </button>
                  </div>
                </div>
              </li>
            </ul>
          </div>

          <div class="glass rounded-2xl p-6">
            <h4 class="font-display text-lg font-semibold">Contact Info</h4>
            <ul class="mt-4 space-y-3 text-sm text-[var(--text-secondary)]">
              <li class="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="text-[var(--accent-light)]"><path d="M21.2 8.4c.5.38.8.97.8 1.6v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V10a2 2 0 0 1 .8-1.6l8-6a2 2 0 0 1 2.4 0l8 6Z"/><path d="m22 10-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 10"/></svg>
                {{ profile.email }}
              </li>
              <li class="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="text-[var(--accent-light)]"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
                {{ profile.location }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <AppModal :open="!!selectedCert" @close="closeCertificate">
      <template v-if="selectedCert">
        <h3 class="font-display text-xl font-bold">{{ selectedCert.name }}</h3>
        <p class="mt-1 text-sm text-[var(--text-muted)]">
          {{ selectedCert.issuer }} · {{ selectedCert.year }}
          <span v-if="selectedCert.distinction" class="text-amber-400"> · {{ selectedCert.distinction }}</span>
        </p>
        <img
          :src="selectedCert.image"
          :alt="`${selectedCert.name} certificate`"
          class="mt-6 w-full rounded-xl ring-1 ring-[var(--border)]"
        />
      </template>
    </AppModal>

    <AppModal :open="!!selectedEdu" @close="closeEducation">
      <template v-if="selectedEdu">
        <h3 class="font-display text-xl font-bold">{{ selectedEdu.title }}</h3>
        <p class="mt-1 text-sm text-[var(--text-muted)]">
          {{ selectedEdu.organization }} · {{ selectedEdu.period }}
        </p>
        <img
          v-if="selectedEdu.image"
          :src="selectedEdu.image"
          :alt="`${selectedEdu.title} document`"
          class="mt-6 w-full rounded-xl ring-1 ring-[var(--border)]"
        />
      </template>
    </AppModal>
  </section>
</template>

<style scoped>
.font-display {
  font-family: var(--font-display);
}
</style>
