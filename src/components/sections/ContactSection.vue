<script setup lang="ts">
import { reactive, ref } from 'vue'
import { Mail, MapPin, Phone, Send } from 'lucide-vue-next'
import { profile } from '@/data/portfolio'
import { sendContactEmail } from '@/services/contact'
import SectionHeading from '@/components/ui/SectionHeading.vue'
import SocialLinks from '@/components/ui/SocialLinks.vue'

const contactItems = [
  { label: 'Email', value: profile.email, href: `mailto:${profile.email}`, icon: Mail },
  { label: 'Phone', value: profile.phone, href: `tel:${profile.phone}`, icon: Phone },
  { label: 'Location', value: profile.location, href: undefined, icon: MapPin },
]

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

const form = reactive({ name: '', email: '', message: '' })
const honeypot = ref('')

// 'invalid' = the form needs fixing, 'error' = sending failed
const status = ref<'idle' | 'sending' | 'sent' | 'invalid' | 'error'>('idle')
const statusMessage = ref('')

async function handleSubmit() {
  if (honeypot.value || status.value === 'sending') return

  const data = {
    name: form.name.trim(),
    email: form.email.trim(),
    message: form.message.trim(),
  }

  if (!data.name || !data.email || !data.message) {
    status.value = 'invalid'
    statusMessage.value = 'Please fill in all fields before sending.'
    return
  }

  if (!EMAIL_PATTERN.test(data.email)) {
    status.value = 'invalid'
    statusMessage.value = 'Please enter a valid email address.'
    return
  }

  status.value = 'sending'
  statusMessage.value = ''

  try {
    await sendContactEmail(data)
    status.value = 'sent'
    statusMessage.value = "Message sent! I'll get back to you soon."
    form.name = ''
    form.email = ''
    form.message = ''
  } catch (error) {
    status.value = 'error'
    statusMessage.value =
      error instanceof Error ? error.message : 'Something went wrong. Please try again.'
  }
}
</script>

<template>
  <section id="contact" class="section">
    <div v-reveal class="container-page">
      <SectionHeading
        title="Contact"
        subtitle="Have a project or a role in mind? Send me a message."
      />

      <div class="grid gap-8 lg:grid-cols-[1fr_1.4fr] lg:gap-12">
        <div>
          <ul class="divide-y divide-line border-y border-line">
            <li v-for="item in contactItems" :key="item.label">
              <component
                :is="item.href ? 'a' : 'div'"
                :href="item.href"
                class="group flex items-center gap-4 py-4"
              >
                <component
                  :is="item.icon"
                  :size="20"
                  class="shrink-0 text-fg-muted"
                  aria-hidden="true"
                />
                <span class="min-w-0">
                  <span class="block text-sm text-fg-muted">{{ item.label }}</span>
                  <span
                    class="block break-words font-medium text-fg transition-colors"
                    :class="{ 'group-hover:text-link': item.href }"
                  >
                    {{ item.value }}
                  </span>
                </span>
              </component>
            </li>
          </ul>

          <SocialLinks class="-ml-2 mt-4" />
        </div>

        <form class="card p-6 md:p-8" novalidate @submit.prevent="handleSubmit">
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

          <div class="grid gap-5 sm:grid-cols-2">
            <div>
              <label for="contact-name" class="label">Name</label>
              <input
                id="contact-name"
                v-model="form.name"
                type="text"
                name="name"
                autocomplete="name"
                required
                class="input"
                placeholder="Your name"
              />
            </div>
            <div>
              <label for="contact-email" class="label">Email</label>
              <input
                id="contact-email"
                v-model="form.email"
                type="email"
                name="email"
                autocomplete="email"
                required
                class="input"
                placeholder="you@example.com"
              />
            </div>
          </div>

          <div class="mt-5">
            <label for="contact-message" class="label">Message</label>
            <textarea
              id="contact-message"
              v-model="form.message"
              name="message"
              required
              rows="5"
              class="input resize-y"
              placeholder="Tell me about your project or role…"
            />
          </div>

          <div class="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
            <button type="submit" class="btn btn-primary" :disabled="status === 'sending'">
              <Send v-if="status !== 'sending'" :size="16" aria-hidden="true" />
              {{ status === 'sending' ? 'Sending…' : 'Send message' }}
            </button>

            <p
              role="status"
              aria-live="polite"
              class="text-sm"
              :class="status === 'sent' ? 'text-emerald-500' : 'text-red-500'"
            >
              <template v-if="status === 'sent' || status === 'invalid' || status === 'error'">
                {{ statusMessage }}
                <a v-if="status === 'error'" :href="`mailto:${profile.email}`" class="underline">
                  Email me directly
                </a>
              </template>
            </p>
          </div>
        </form>
      </div>
    </div>
  </section>
</template>
