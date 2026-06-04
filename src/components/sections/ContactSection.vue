<script setup lang="ts">
import { ref } from 'vue'
import { profile } from '@/data/portfolio'
import { sendContactEmail } from '@/services/contact'
import SectionHeading from '@/components/ui/SectionHeading.vue'

const form = ref({
  name: '',
  email: '',
  subject: '',
  message: '',
})

const honeypot = ref('')
const status = ref<'idle' | 'sending' | 'sent' | 'error'>('idle')
const errorMessage = ref('')

async function handleSubmit() {
  if (honeypot.value) return

  if (!form.value.name.trim() || !form.value.email.trim() || !form.value.subject.trim() || !form.value.message.trim()) {
    status.value = 'error'
    errorMessage.value = 'Please fill in all fields before sending.'
    setTimeout(() => { status.value = 'idle' }, 5000)
    return
  }

  status.value = 'sending'
  errorMessage.value = ''

  try {
    await sendContactEmail(form.value)
    status.value = 'sent'
    form.value = { name: '', email: '', subject: '', message: '' }

    setTimeout(() => {
      status.value = 'idle'
    }, 5000)
  } catch (error) {
    status.value = 'error'
    errorMessage.value =
      error instanceof Error
        ? error.message
        : 'Something went wrong. Please email me directly.'

    setTimeout(() => {
      status.value = 'idle'
    }, 8000)
  }
}

const socialLinks = [
  { label: 'Email', href: `mailto:${profile.email}`, icon: 'M21.2 8.4c.5.38.8.97.8 1.6v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V10a2 2 0 0 1 .8-1.6l8-6a2 2 0 0 1 2.4 0l8 6Z M22 10l-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 10' },
  { label: 'LinkedIn', href: profile.linkedin, icon: 'M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z M2 9h4v12H2z M4 2a2 2 0 1 0 0 4 2 2 0 0 0 0-4z' },
  { label: 'GitHub', href: profile.github, icon: 'M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.01.28-2.12 0-3A11.65 11.65 0 0 0 19 4c-1.6 0-3.1.6-4.2 1.6A11.65 11.65 0 0 0 8 4c-1.6 0-3.1.6-4.2 1.6-.72 1.02-1.28 2.24-1 3.5-.28 1.01-.28 2.12 0 3C2.6 12.5 5.6 14.5 8.6 14.5c-.5.5-.9 1.1-1 1.8v4' },
  { label: 'Telegram', href: profile.telegram, icon: 'M21.5 2.5 2.8 10.2c-1.1.5-1.1 1.1-.2 1.4l4.8 1.5 1.8 5.6c.2.5.4.7.8.7.3 0 .5-.1.7-.4l2.6-2.5 4.8 3.5c.9.5 1.5.2 1.7-.9L22.7 4c.3-1.2-.5-1.7-1.2-1.5z' },
]
</script>

<template>
  <section id="contact" class="section-padding relative">
    <div class="pointer-events-none absolute inset-0" aria-hidden="true">
      <div class="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-cyan-500/5 blur-[100px]" />
    </div>

    <div class="container-max relative">
      <SectionHeading
        label="Contact"
        title="Let's Work Together"
        subtitle="Have a project in mind? I'd love to hear about it"
        align="center"
      />

      <div class="grid gap-12 lg:grid-cols-5">
        <!-- Contact info -->
        <div
          v-motion
          :initial="{ opacity: 0, x: -30 }"
          :visible="{ opacity: 1, x: 0, transition: { duration: 500 } }"
          class="space-y-8 lg:col-span-2"
        >
          <div class="glass rounded-2xl p-6">
            <h3 class="font-display text-lg font-semibold">Get in Touch</h3>
            <p class="mt-3 text-sm leading-relaxed text-[var(--text-secondary)]">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
            </p>
          </div>

          <div class="space-y-4">
            <a
              :href="`mailto:${profile.email}`"
              class="glass flex items-center gap-4 rounded-xl p-4 transition-all duration-300 hover:border-[var(--accent)]"
            >
              <div class="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-500/10">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="text-[var(--accent-light)]"><path d="M21.2 8.4c.5.38.8.97.8 1.6v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V10a2 2 0 0 1 .8-1.6l8-6a2 2 0 0 1 2.4 0l8 6Z"/><path d="m22 10-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 10"/></svg>
              </div>
              <div>
                <p class="text-xs text-[var(--text-muted)]">Email</p>
                <p class="text-sm font-medium">{{ profile.email }}</p>
              </div>
            </a>

            <div class="glass flex items-center gap-4 rounded-xl p-4">
              <div class="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-500/10">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="text-cyan-400"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
              </div>
              <div>
                <p class="text-xs text-[var(--text-muted)]">Location</p>
                <p class="text-sm font-medium">{{ profile.location }}</p>
              </div>
            </div>
          </div>

          <!-- Social links -->
          <div class="flex gap-3">
            <a
              v-for="social in socialLinks"
              :key="social.label"
              :href="social.href"
              target="_blank"
              rel="noopener noreferrer"
              class="flex h-12 w-12 items-center justify-center rounded-xl glass text-[var(--text-secondary)] transition-all duration-300 hover:border-[var(--accent)] hover:text-[var(--accent-light)] hover:scale-110"
              :aria-label="social.label"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path :d="social.icon" />
              </svg>
            </a>
          </div>
        </div>

        <!-- Contact form -->
        <div
          v-motion
          :initial="{ opacity: 0, x: 30 }"
          :visible="{ opacity: 1, x: 0, transition: { duration: 500, delay: 200 } }"
          class="lg:col-span-3"
        >
        <form
          class="glass rounded-2xl p-8"
          novalidate
          @submit.prevent="handleSubmit"
        >
          <!-- Honeypot for spam bots -->
          <input
            v-model="honeypot"
            type="text"
            name="botcheck"
            tabindex="-1"
            autocomplete="off"
            class="absolute -left-[9999px] h-0 w-0 opacity-0"
            aria-hidden="true"
          />

          <div class="grid gap-6 sm:grid-cols-2">
            <div>
              <label for="name" class="mb-2 block text-sm font-medium text-[var(--text-secondary)]">Name</label>
              <input
                id="name"
                v-model="form.name"
                type="text"
                required
                class="w-full rounded-xl border border-[var(--border)] bg-[var(--surface)] px-4 py-3 text-sm text-[var(--text-primary)] transition-colors focus:border-[var(--accent)] focus:outline-none"
                placeholder="Your name"
              />
            </div>
            <div>
              <label for="email" class="mb-2 block text-sm font-medium text-[var(--text-secondary)]">Email</label>
              <input
                id="email"
                v-model="form.email"
                type="email"
                required
                class="w-full rounded-xl border border-[var(--border)] bg-[var(--surface)] px-4 py-3 text-sm text-[var(--text-primary)] transition-colors focus:border-[var(--accent)] focus:outline-none"
                placeholder="your@email.com"
              />
            </div>
          </div>

          <div class="mt-6">
            <label for="subject" class="mb-2 block text-sm font-medium text-[var(--text-secondary)]">Subject</label>
            <input
              id="subject"
              v-model="form.subject"
              type="text"
              required
              class="w-full rounded-xl border border-[var(--border)] bg-[var(--surface)] px-4 py-3 text-sm text-[var(--text-primary)] transition-colors focus:border-[var(--accent)] focus:outline-none"
              placeholder="Project inquiry"
            />
          </div>

          <div class="mt-6">
            <label for="message" class="mb-2 block text-sm font-medium text-[var(--text-secondary)]">Message</label>
            <textarea
              id="message"
              v-model="form.message"
              required
              rows="5"
              class="w-full resize-none rounded-xl border border-[var(--border)] bg-[var(--surface)] px-4 py-3 text-sm text-[var(--text-primary)] transition-colors focus:border-[var(--accent)] focus:outline-none"
              placeholder="Tell me about your project..."
            />
          </div>

          <div class="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
            <button
              type="submit"
              class="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-indigo-500 to-violet-600 px-8 py-4 text-base font-medium text-white shadow-lg shadow-indigo-500/25 transition-all duration-300 hover:scale-[1.02] hover:shadow-indigo-500/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 disabled:pointer-events-none disabled:opacity-50"
              :disabled="status === 'sending'"
            >
              <svg v-if="status !== 'sending'" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m22 2-7 20-4-9-9-4Z"/><path d="M22 2 11 13"/></svg>
              {{ status === 'sending' ? 'Sending...' : 'Send Message' }}
            </button>

            <Transition
              enter-active-class="transition duration-300"
              enter-from-class="opacity-0"
              enter-to-class="opacity-100"
            >
              <p v-if="status === 'sent'" class="text-sm text-emerald-400">
                Message sent! I'll get back to you soon.
              </p>
              <p v-else-if="status === 'error'" class="text-sm text-red-400">
                {{ errorMessage }}
                <a :href="`mailto:${profile.email}`" class="ml-1 underline hover:text-red-300">
                  Email me directly
                </a>
              </p>
            </Transition>
          </div>
        </form>
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
