import * as avatar from '@zag-js/avatar'
import { type ComputedRef, type UnwrapRef } from 'vue'
import { createContext } from '../context'
import type { UseAvatarReturn } from './use-avatar'

export const [AvatarProvider, useAvatarContext] =
  createContext<ComputedRef<avatar.PublicApi>>('AvatarContext')

export type AvatarContext = UnwrapRef<UseAvatarReturn>
