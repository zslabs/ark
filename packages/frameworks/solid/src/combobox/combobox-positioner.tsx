import { mergeProps } from '@zag-js/solid'
import { Show } from 'solid-js'
import { ark, type HTMLArkProps } from '../factory'
import { usePresenceContext } from '../presence'
import { useComboboxContext } from './combobox-context'

export interface ComboboxPositionerProps extends HTMLArkProps<'div'> {}

export const ComboboxPositioner = (props: ComboboxPositionerProps) => {
  const api = useComboboxContext()
  const presenceApi = usePresenceContext()
  const mergedProps = mergeProps(() => api().positionerProps, props)

  return (
    <Show when={!presenceApi().isUnmounted}>
      <ark.div {...mergedProps} />
    </Show>
  )
}
