import { createApp } from 'vue'
import { createPinia } from 'pinia'
import router from '@/router'
import { useThemeStore } from '@/stores/theme'
import { vReveal } from '@/directives/reveal'
import App from '@/App.vue'
import './style.css'

const app = createApp(App)
const pinia = createPinia()

app.use(pinia)
app.use(router)
app.directive('reveal', vReveal)

const themeStore = useThemeStore()
themeStore.applyTheme()

app.mount('#app')
