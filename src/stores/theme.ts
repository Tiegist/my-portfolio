import { defineStore } from 'pinia'
import { ref, watch } from 'vue'

export type ThemeMode = 'dark' | 'light'

export const useThemeStore = defineStore('theme', () => {
  const mode = ref<ThemeMode>(
    (localStorage.getItem('portfolio-theme') as ThemeMode) ?? 'dark',
  )

  function applyTheme() {
    document.documentElement.setAttribute('data-theme', mode.value)
    document.documentElement.classList.toggle('dark', mode.value === 'dark')
    document.documentElement.classList.toggle('light', mode.value === 'light')
  }

  function toggle() {
    mode.value = mode.value === 'dark' ? 'light' : 'dark'
  }

  function setTheme(newMode: ThemeMode) {
    mode.value = newMode
  }

  watch(mode, (value) => {
    localStorage.setItem('portfolio-theme', value)
    applyTheme()
  })

  applyTheme()

  return { mode, toggle, setTheme, applyTheme }
})
