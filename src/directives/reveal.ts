import type { Directive } from 'vue'

/**
 * v-reveal: fades an element in once, the first time it scrolls into view.
 * The styling lives in style.css under [data-reveal]. If the browser has no
 * IntersectionObserver the element is simply left visible.
 */
let observer: IntersectionObserver | null = null

function getObserver(): IntersectionObserver {
  if (!observer) {
    observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue
          ;(entry.target as HTMLElement).dataset.reveal = 'shown'
          observer?.unobserve(entry.target)
        }
      },
      { rootMargin: '0px 0px -5% 0px' },
    )
  }
  return observer
}

export const vReveal: Directive<HTMLElement> = {
  mounted(el) {
    if (typeof IntersectionObserver === 'undefined') return
    el.dataset.reveal = 'pending'
    getObserver().observe(el)
  },
  unmounted(el) {
    observer?.unobserve(el)
  },
}

declare module 'vue' {
  interface GlobalDirectives {
    vReveal: typeof vReveal
  }
}
