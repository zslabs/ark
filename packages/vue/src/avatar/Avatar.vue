<script setup lang="ts">
import * as avatar from '@zag-js/avatar'
import { ark } from '../factory'
import { AvatarProvider } from './avatar-context'
import { useAvatar } from './use-avatar'
import { computed, useAttrs } from 'vue'
import { mergeProps } from '@zag-js/vue'

defineProps<avatar.PublicApi>()

const attrs = useAttrs()
const api = useAvatar()

AvatarProvider(api)

const rootProps = computed(() => mergeProps(api.value.rootProps, attrs))
</script>

<template>
  <ark.div v-bind="rootProps">
    <slot></slot>
  </ark.div>
</template>
