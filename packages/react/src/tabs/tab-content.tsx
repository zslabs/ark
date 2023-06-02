import { mergeProps } from '@zag-js/react'
import { type connect } from '@zag-js/tabs'
import { createSplitProps } from '../create-split-props'
import { ark, type HTMLArkProps } from '../factory'
import { forwardRef } from '../forward-ref'
import { LazyProvider } from '../lazy'
import { type Assign } from '../types'
import { useTabsContext } from './tabs-context'

type GetContentProps = Parameters<ReturnType<typeof connect>['getContentProps']>[0]

export type TabContentProps = Assign<HTMLArkProps<'div'>, GetContentProps>

export const TabContent = forwardRef<'div', TabContentProps>((props, ref) => {
  const [tabContentProps, divProps] = createSplitProps<GetContentProps>()(props, ['value'])
  const { getContentProps, value } = useTabsContext()
  const mergedProps = mergeProps(getContentProps(tabContentProps), divProps)
  const hidden = value !== tabContentProps.value

  return (
    <LazyProvider value={{ hidden }}>
      <ark.div {...mergedProps} ref={ref} />
    </LazyProvider>
  )
})
