<script setup lang="ts">
import { computed } from 'vue'

defineOptions({ inheritAttrs: false })

const props = withDefaults(
  defineProps<{
    variant?: 'primary' | 'secondary' | 'ghost'
    size?: 'sm' | 'md'
    href?: string
    external?: boolean
    nativeType?: 'button' | 'submit'
    disabled?: boolean
  }>(),
  {
    variant: 'primary',
    size: 'md',
    nativeType: 'button',
    disabled: false,
  },
)

const htmlType = computed(() => (props.href ? undefined : props.nativeType))
</script>

<template>
  <component
    :is="href ? 'a' : 'button'"
    v-bind="$attrs"
    :href="href"
    :type="htmlType"
    :target="external ? '_blank' : undefined"
    :rel="external ? 'noopener noreferrer' : undefined"
    :disabled="href ? undefined : disabled"
    class="btn"
    :class="[`btn-${variant}`, { 'btn-sm': size === 'sm' }]"
  >
    <slot />
  </component>
</template>
