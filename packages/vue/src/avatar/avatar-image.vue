<script lang="ts">
export interface AvatarImageProps extends HTMLArkProps<'img'> {
  onLoadingStatusChange?: void
}
</script>

<script setup lang="ts">
import { mergeProps } from '@zag-js/vue'
import { computed, useAttrs } from 'vue'
import { ark, type HTMLArkProps } from '../factory'
import { useAvatarContext } from './avatar-context'

const props = defineProps<AvatarImageProps>()

const api = useAvatarContext()
const attrs = useAttrs()

const imageProps = computed(() => mergeProps(api.value.imageProps, attrs))
</script>

<template>
  <ark.img v-bind="imageProps">
    <slot />
  </ark.img>
</template>
