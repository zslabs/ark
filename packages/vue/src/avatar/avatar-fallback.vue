<script setup lang="ts">
import { mergeProps } from '@zag-js/vue'
import { computed, useAttrs } from 'vue'
import { ark, type HTMLArkProps } from '../factory'
import { useAvatarContext } from './avatar-context'

defineProps<HTMLArkProps<'div'>>()

const api = useAvatarContext()
const attrs = useAttrs()

const fallbackProps = computed(() => mergeProps(api.value.fallbackProps, attrs))
</script>

<template>
  <ark.div v-bind="fallbackProps">
    <slot />
  </ark.div>
</template>
