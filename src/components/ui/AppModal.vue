<script setup lang="ts">
import { nextTick, onUnmounted, ref, useId, watch } from 'vue'
import { X } from 'lucide-vue-next'

const props = defineProps<{
  open: boolean
  title: string
  subtitle?: string
}>()

const emit = defineEmits<{
  close: []
}>()

const titleId = useId()
const panel = ref<HTMLElement | null>(null)
let previouslyFocused: HTMLElement | null = null

const FOCUSABLE = 'a[href], button:not([disabled]), input, textarea, [tabindex]:not([tabindex="-1"])'

function onKeydown(e: KeyboardEvent) {
  if (e.key === 'Escape') {
    emit('close')
    return
  }

  // Keep Tab inside the dialog while it is open
  if (e.key !== 'Tab' || !panel.value) return

  const items = panel.value.querySelectorAll<HTMLElement>(FOCUSABLE)
  const first = items[0]
  const last = items[items.length - 1]
  if (!first || !last) {
    e.preventDefault()
    return
  }

  const active = document.activeElement
  if (e.shiftKey && (active === first || active === panel.value)) {
    e.preventDefault()
    last.focus()
  } else if (!e.shiftKey && active === last) {
    e.preventDefault()
    first.focus()
  }
}

function release() {
  document.removeEventListener('keydown', onKeydown)
  document.documentElement.style.overflow = ''
}

watch(
  () => props.open,
  async (open) => {
    if (open) {
      previouslyFocused = document.activeElement as HTMLElement | null
      document.addEventListener('keydown', onKeydown)
      document.documentElement.style.overflow = 'hidden'
      await nextTick()
      panel.value?.focus()
    } else {
      release()
      previouslyFocused?.focus()
      previouslyFocused = null
    }
  },
)

onUnmounted(release)
</script>

<template>
  <Teleport to="body">
    <Transition
      enter-active-class="transition-opacity duration-200 ease-out"
      enter-from-class="opacity-0"
      leave-active-class="transition-opacity duration-150 ease-in"
      leave-to-class="opacity-0"
    >
      <div
        v-if="open"
        class="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 p-4"
        @click.self="emit('close')"
      >
        <div
          ref="panel"
          role="dialog"
          aria-modal="true"
          :aria-labelledby="titleId"
          tabindex="-1"
          class="flex max-h-[88vh] w-full max-w-2xl flex-col rounded-2xl border border-line bg-raised shadow-2xl outline-none"
        >
          <header class="flex items-start justify-between gap-4 border-b border-line px-5 py-4 md:px-6">
            <div class="min-w-0">
              <h3 :id="titleId" class="text-lg font-semibold text-fg">{{ title }}</h3>
              <p v-if="subtitle" class="mt-0.5 text-sm text-fg-muted">{{ subtitle }}</p>
            </div>
            <button
              type="button"
              class="icon-btn -mr-2 -mt-1 shrink-0"
              aria-label="Close"
              @click="emit('close')"
            >
              <X :size="20" aria-hidden="true" />
            </button>
          </header>

          <div class="overflow-y-auto p-5 md:p-6">
            <slot />
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>
