import { ref, onMounted, onUnmounted } from 'vue'

export function useCounterAnimation(
  target: number,
  duration = 2000,
  startOnVisible = true,
) {
  const count = ref(0)
  const elementRef = ref<HTMLElement | null>(null)
  let animated = false

  function animate() {
    if (animated) return
    animated = true

    const startTime = performance.now()

    function step(currentTime: number) {
      const elapsed = currentTime - startTime
      const progress = Math.min(elapsed / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      count.value = Math.floor(eased * target)

      if (progress < 1) {
        requestAnimationFrame(step)
      } else {
        count.value = target
      }
    }

    requestAnimationFrame(step)
  }

  if (startOnVisible) {
    onMounted(() => {
      if (!elementRef.value) return

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry?.isIntersecting) {
            animate()
            observer.disconnect()
          }
        },
        { threshold: 0.3 },
      )

      observer.observe(elementRef.value)

      onUnmounted(() => observer.disconnect())
    })
  }

  return { count, elementRef, animate }
}

/**
 * Tracks which section is currently being read, for highlighting the nav.
 * Sections are looked up on every update, so it keeps working even though
 * the page content is rendered after the navbar.
 */
export function useScrollSpy(sectionIds: string[]) {
  const activeSection = ref('')
  let frame = 0

  function update() {
    frame = 0
    const line = window.innerHeight * 0.35
    let current = ''

    for (const id of sectionIds) {
      const el = document.getElementById(id)
      if (el && el.getBoundingClientRect().top <= line) current = id
    }

    // At the very bottom the last section may be too short to reach the line
    const atBottom =
      window.scrollY > 0 &&
      window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2
    if (atBottom) current = sectionIds[sectionIds.length - 1] ?? current

    activeSection.value = current
  }

  function requestUpdate() {
    if (!frame) frame = requestAnimationFrame(update)
  }

  onMounted(() => {
    window.addEventListener('scroll', requestUpdate, { passive: true })
    window.addEventListener('resize', requestUpdate, { passive: true })
    requestUpdate()
  })

  onUnmounted(() => {
    window.removeEventListener('scroll', requestUpdate)
    window.removeEventListener('resize', requestUpdate)
    if (frame) cancelAnimationFrame(frame)
  })

  return { activeSection }
}

export function useSmoothScroll() {
  function scrollTo(href: string) {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const behavior: ScrollBehavior = reduceMotion ? 'auto' : 'smooth'
    const el = document.getElementById(href.replace('#', ''))

    if (!el || el.id === 'home') {
      window.scrollTo({ top: 0, behavior })
      return
    }

    el.scrollIntoView({ behavior, block: 'start' })
  }

  return { scrollTo }
}

export function useParallax(speed = 0.3) {
  const offset = ref(0)

  function onScroll() {
    offset.value = window.scrollY * speed
  }

  onMounted(() => {
    window.addEventListener('scroll', onScroll, { passive: true })
  })

  onUnmounted(() => {
    window.removeEventListener('scroll', onScroll)
  })

  return { offset }
}
