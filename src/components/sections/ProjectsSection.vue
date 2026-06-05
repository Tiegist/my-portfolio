<script setup lang="ts">
import { ref, computed } from 'vue'
import { projects, type Project } from '@/data/portfolio'
import SectionHeading from '@/components/ui/SectionHeading.vue'
import TechBadge from '@/components/ui/TechBadge.vue'
import AppButton from '@/components/ui/AppButton.vue'
import AppModal from '@/components/ui/AppModal.vue'
import GithubIcon from '@/components/icons/GithubIcon.vue'

const searchQuery = ref('')
const activeFilter = ref<'all' | 'web' | 'erp' | 'ecommerce'>('all')
const selectedProject = ref<Project | null>(null)

const filters = [
  { id: 'all' as const, label: 'All Projects' },
  { id: 'web' as const, label: 'Web Apps' },
  { id: 'erp' as const, label: 'ERP Systems' },
  { id: 'ecommerce' as const, label: 'E-commerce' },
]

const filteredProjects = computed(() => {
  return projects.filter((project) => {
    const matchesFilter = activeFilter.value === 'all' || project.category === activeFilter.value
    const query = searchQuery.value.toLowerCase()
    const matchesSearch =
      !query ||
      project.title.toLowerCase().includes(query) ||
      project.description.toLowerCase().includes(query) ||
      project.technologies.some((t) => t.toLowerCase().includes(query))
    return matchesFilter && matchesSearch
  })
})

function openProject(project: Project) {
  selectedProject.value = project
}

function closeModal() {
  selectedProject.value = null
}
</script>

<template>
  <section id="projects" class="section-padding section-padding-top-sm relative">
    <div class="container-max">
      <SectionHeading
        label="Portfolio"
        title="Featured Projects"
        subtitle="Real-world applications built with modern technologies"
        align="center"
      />

      <!-- Search & Filter -->
      <div
        v-motion
        :initial="{ opacity: 0, y: 20 }"
        :visible="{ opacity: 1, y: 0, transition: { duration: 500 } }"
        class="mb-12 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between"
      >
        <div class="relative max-w-md flex-1">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="absolute left-4 top-1/2 -translate-y-1/2 text-[var(--text-muted)]"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
          <input
            v-model="searchQuery"
            type="search"
            placeholder="Search projects..."
            class="w-full rounded-xl border border-[var(--border)] bg-[var(--surface-glass)] py-3 pl-12 pr-4 text-sm text-[var(--text-primary)] placeholder:text-[var(--text-muted)] backdrop-blur-xl transition-colors focus:border-[var(--accent)] focus:outline-none"
            aria-label="Search projects"
          />
        </div>

        <div class="flex flex-wrap gap-2">
          <button
            v-for="filter in filters"
            :key="filter.id"
            class="rounded-lg px-4 py-2 text-sm font-medium transition-all duration-300"
            :class="
              activeFilter === filter.id
                ? 'bg-indigo-500/20 text-[var(--accent-light)] ring-1 ring-indigo-500/30'
                : 'text-[var(--text-secondary)] hover:bg-white/5'
            "
            @click="activeFilter = filter.id"
          >
            {{ filter.label }}
          </button>
        </div>
      </div>

      <!-- Project cards -->
      <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        <article
          v-for="(project, index) in filteredProjects"
          :key="project.id"
          v-motion
          :initial="{ opacity: 0, y: 30 }"
          :visible="{ opacity: 1, y: 0, transition: { duration: 500, delay: index * 100 } }"
          class="glass group flex flex-col overflow-hidden rounded-2xl transition-all duration-500 hover:border-[var(--accent)] hover:shadow-2xl hover:shadow-indigo-500/10"
        >
          <!-- Image -->
          <div
            class="relative h-48 overflow-hidden bg-gradient-to-br"
            :class="project.gradient"
          >
            <img
              :src="project.image"
              :alt="`${project.title} screenshot`"
              class="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              loading="lazy"
              width="400"
              height="192"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-[var(--surface)] via-transparent to-transparent opacity-60" />

            <button
              class="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              @click="openProject(project)"
            >
              <span class="rounded-full bg-white/20 px-6 py-2 text-sm font-medium text-white backdrop-blur-sm">
                View Details
              </span>
            </button>
          </div>

          <!-- Content -->
          <div class="flex flex-1 flex-col p-6">
            <h3 class="font-display text-xl font-bold">{{ project.title }}</h3>
            <p class="mt-2 flex-1 text-sm leading-relaxed text-[var(--text-secondary)]">
              {{ project.description }}
            </p>

            <div class="mt-4 flex flex-wrap gap-2">
              <TechBadge
                v-for="tech in project.technologies.slice(0, 4)"
                :key="tech"
                :label="tech"
              />
              <TechBadge
                v-if="project.technologies.length > 4"
                :label="`+${project.technologies.length - 4}`"
                color="border-white/10 bg-white/5 text-[var(--text-muted)]"
              />
            </div>

            <div class="mt-6 flex flex-wrap gap-2">
              <AppButton
                v-if="project.liveUrl"
                :href="project.liveUrl"
                variant="primary"
                size="sm"
                external
              >
                Live Demo
              </AppButton>
              <AppButton
                v-for="repo in project.githubRepos"
                :key="repo.url"
                :href="repo.url"
                variant="outline"
                size="sm"
                external
              >
                <GithubIcon :size="14" />
                {{ repo.label }}
              </AppButton>
              <AppButton variant="ghost" size="sm" @click="openProject(project)">
                Details
              </AppButton>
            </div>
          </div>
        </article>
      </div>

      <p
        v-if="filteredProjects.length === 0"
        class="py-16 text-center text-[var(--text-muted)]"
      >
        No projects match your search.
      </p>
    </div>

    <!-- Project Modal -->
    <AppModal :open="!!selectedProject" @close="closeModal">
      <template v-if="selectedProject">
        <div
          class="mb-6 h-48 overflow-hidden rounded-xl bg-gradient-to-br"
          :class="selectedProject.gradient"
        >
          <img
            :src="selectedProject.image"
            :alt="selectedProject.title"
            class="h-full w-full object-cover"
          />
        </div>

        <h3 class="font-display text-2xl font-bold">{{ selectedProject.title }}</h3>
        <p class="mt-4 leading-relaxed text-[var(--text-secondary)]">
          {{ selectedProject.longDescription }}
        </p>

        <h4 class="mt-6 font-display text-lg font-semibold">Key Features</h4>
        <ul class="mt-3 space-y-2">
          <li
            v-for="feature in selectedProject.features"
            :key="feature"
            class="flex items-start gap-2 text-sm text-[var(--text-secondary)]"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="mt-0.5 shrink-0 text-emerald-400"><path d="M20 6 9 17l-5-5"/></svg>
            {{ feature }}
          </li>
        </ul>

        <div class="mt-6 flex flex-wrap gap-2">
          <TechBadge
            v-for="tech in selectedProject.technologies"
            :key="tech"
            :label="tech"
          />
        </div>

        <div class="mt-8 flex flex-wrap gap-3">
          <AppButton
            v-if="selectedProject.liveUrl"
            :href="selectedProject.liveUrl"
            variant="primary"
            external
          >
            Live Demo
          </AppButton>
          <AppButton
            v-for="repo in selectedProject.githubRepos"
            :key="repo.url"
            :href="repo.url"
            variant="outline"
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

<style scoped>
.font-display {
  font-family: var(--font-display);
}
</style>
