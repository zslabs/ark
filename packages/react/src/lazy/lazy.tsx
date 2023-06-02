import { useRef } from 'react'
import { useLazyContext } from './lazy-context'

export type LazyProps = React.PropsWithChildren<{
  unmount?: boolean
}>

export const Lazy = (props: LazyProps) => {
  const { children, unmount } = props
  const { hidden } = useLazyContext()

  const isSelected = !hidden

  const wasSelected = useRef(false)

  if (!hidden) {
    wasSelected.current = true
  }

  if (isSelected || (!unmount && wasSelected.current)) {
    return <>{children}</>
  }

  return null
}
