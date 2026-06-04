import { ref, onMounted, onUnmounted, type Ref } from 'vue'

export function useTypedText(
  words: string[],
  typingSpeed = 80,
  deletingSpeed = 40,
  pauseDuration = 2000,
) {
  const displayText = ref('')
  const wordIndex = ref(0)
  const isDeleting = ref(false)
  let timeoutId: ReturnType<typeof setTimeout>

  function tick() {
    const currentWord = words[wordIndex.value] ?? ''

    if (!isDeleting.value) {
      displayText.value = currentWord.slice(0, displayText.value.length + 1)

      if (displayText.value === currentWord) {
        timeoutId = setTimeout(() => {
          isDeleting.value = true
          tick()
        }, pauseDuration)
        return
      }

      timeoutId = setTimeout(tick, typingSpeed)
    } else {
      displayText.value = currentWord.slice(0, displayText.value.length - 1)

      if (displayText.value === '') {
        isDeleting.value = false
        wordIndex.value = (wordIndex.value + 1) % words.length
        timeoutId = setTimeout(tick, typingSpeed)
        return
      }

      timeoutId = setTimeout(tick, deletingSpeed)
    }
  }

  onMounted(() => {
    tick()
  })

  onUnmounted(() => {
    clearTimeout(timeoutId)
  })

  return { displayText }
}

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

export function useScrollProgress() {
  const progress = ref(0)

  function updateProgress() {
    const scrollTop = window.scrollY
    const docHeight = document.documentElement.scrollHeight - window.innerHeight
    progress.value = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0
  }

  onMounted(() => {
    window.addEventListener('scroll', updateProgress, { passive: true })
    updateProgress()
  })

  onUnmounted(() => {
    window.removeEventListener('scroll', updateProgress)
  })

  return { progress }
}

export function useScrollSpy(sectionIds: string[]) {
  const activeSection = ref(sectionIds[0] ?? '')

  onMounted(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            activeSection.value = entry.target.id
          }
        })
      },
      { rootMargin: '-40% 0px -50% 0px', threshold: 0 },
    )

    sectionIds.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    onUnmounted(() => observer.disconnect())
  })

  return { activeSection }
}

export function useSmoothScroll() {
  function scrollTo(href: string) {
    const id = href.replace('#', '')
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
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

export function useMousePosition(): { x: Ref<number>; y: Ref<number> } {
  const x = ref(0)
  const y = ref(0)

  function onMove(e: MouseEvent) {
    x.value = e.clientX
    y.value = e.clientY
  }

  onMounted(() => {
    window.addEventListener('mousemove', onMove, { passive: true })
  })

  onUnmounted(() => {
    window.removeEventListener('mousemove', onMove)
  })

  return { x, y }
}
