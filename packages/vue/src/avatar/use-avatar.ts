import * as avatar from '@zag-js/avatar'
import { normalizeProps, useMachine } from '@zag-js/vue'
import { computed } from 'vue'
import { useEnvironmentContext } from '../environment'
import { useId } from '../utils'

export function useAvatar() {
  const getRootNode = useEnvironmentContext()
  const [state, send] = useMachine(
    avatar.machine({
      id: useId().value,
      getRootNode,
    }),
  )
  return computed(() => avatar.connect(state.value, send, normalizeProps))
}

export type UseAvatarReturn = ReturnType<typeof useAvatar>
