<script setup lang="ts">
import { ref } from 'vue'
import { ArrowUpRight, Check } from 'lucide-vue-next'
import { projects, type Project } from '@/data/portfolio'
import SectionHeading from '@/components/ui/SectionHeading.vue'
import TechBadge from '@/components/ui/TechBadge.vue'
import AppButton from '@/components/ui/AppButton.vue'
import AppModal from '@/components/ui/AppModal.vue'
import GithubIcon from '@/components/icons/GithubIcon.vue'

/** Tags shown on a card; the rest are listed in the details popup */
const CARD_TECH_LIMIT = 4

const selected = ref<Project | null>(null)
const isModalOpen = ref(false)

function openProject(project: Project) {
  selected.value = project
  isModalOpen.value = true
}
</script>

<template>
  <section id="projects" class="section">
    <div v-reveal class="container-page">
      <SectionHeading
        title="Projects"
        subtitle="Selected work, with live demos and source code."
      />

      <div class="grid gap-6 md:grid-cols-2">
        <article
          v-for="project in projects"
          :key="project.id"
          class="card card-interactive flex flex-col overflow-hidden"
        >
          <button
            type="button"
            class="block aspect-[2/1] w-full overflow-hidden border-b border-line bg-chip"
            :aria-label="`View details: ${project.title}`"
            @click="openProject(project)"
          >
            <img
              :src="project.image"
              :alt="`${project.title} screenshot`"
              class="h-full w-full object-cover object-top"
              loading="lazy"
              width="1024"
              height="512"
            />
          </button>

          <div class="flex flex-1 flex-col p-5 md:p-6">
            <p class="text-sm text-fg-muted">{{ project.context }}</p>
            <h3 class="mt-1 text-lg font-semibold text-fg">{{ project.title }}</h3>
            <p class="mt-2 flex-1 text-sm leading-relaxed text-fg-soft">
              {{ project.description }}
            </p>

            <ul class="mt-4 flex flex-wrap gap-2">
              <li v-for="tech in project.technologies.slice(0, CARD_TECH_LIMIT)" :key="tech">
                <TechBadge :label="tech" />
              </li>
              <li v-if="project.technologies.length > CARD_TECH_LIMIT">
                <TechBadge :label="`+${project.technologies.length - CARD_TECH_LIMIT}`" />
              </li>
            </ul>

            <div
              class="-mb-1.5 mt-5 flex flex-wrap items-center gap-x-5 border-t border-line pt-2.5 text-sm"
            >
              <a
                v-if="project.liveUrl"
                :href="project.liveUrl"
                target="_blank"
                rel="noopener noreferrer"
                class="link"
              >
                Live demo
                <ArrowUpRight :size="16" aria-hidden="true" />
              </a>
              <a
                v-for="repo in project.githubRepos"
                :key="repo.url"
                :href="repo.url"
                target="_blank"
                rel="noopener noreferrer"
                class="link-muted"
              >
                <GithubIcon :size="14" />
                {{ repo.label }}
              </a>
              <button type="button" class="link-muted ml-auto" @click="openProject(project)">
                Details
              </button>
            </div>
          </div>
        </article>
      </div>
    </div>

    <AppModal
      :open="isModalOpen"
      :title="selected?.title ?? ''"
      :subtitle="selected?.context"
      @close="isModalOpen = false"
    >
      <template v-if="selected">
        <img
          :src="selected.image"
          :alt="`${selected.title} screenshot`"
          class="aspect-[2/1] w-full rounded-xl border border-line object-cover object-top"
          width="1024"
          height="512"
        />

        <p class="mt-5 leading-relaxed text-fg-soft">
          {{ selected.longDescription }}
        </p>

        <h4 class="mt-6 text-sm font-semibold text-fg">Key features</h4>
        <ul class="mt-3 space-y-2">
          <li
            v-for="feature in selected.features"
            :key="feature"
            class="flex items-start gap-2 text-sm text-fg-soft"
          >
            <Check :size="16" class="mt-0.5 shrink-0 text-link" aria-hidden="true" />
            {{ feature }}
          </li>
        </ul>

        <h4 class="mt-6 text-sm font-semibold text-fg">Built with</h4>
        <ul class="mt-3 flex flex-wrap gap-2">
          <li v-for="tech in selected.technologies" :key="tech">
            <TechBadge :label="tech" />
          </li>
        </ul>

        <div class="mt-8 flex flex-wrap gap-3">
          <AppButton v-if="selected.liveUrl" :href="selected.liveUrl" external>
            Live demo
            <ArrowUpRight :size="16" aria-hidden="true" />
          </AppButton>
          <AppButton
            v-for="repo in selected.githubRepos"
            :key="repo.url"
            :href="repo.url"
            variant="secondary"
            external
          >
            <GithubIcon :size="16" />
            {{ repo.label }}
          </AppButton>
        </div>
      </template>
    </AppModal>
  </section>
</template>
