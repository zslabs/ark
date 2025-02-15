import { type PanelProps } from '@zag-js/splitter'
import { defineComponent, type PropType } from 'vue'
import { ark, type HTMLArkProps } from '../factory'
import { type Assign } from '../types'
import { getValidChildren, type ComponentWithProps } from '../utils'
import { useSplitterContext } from './splitter-context'

export type SplitterPanelProps = Assign<HTMLArkProps<'div'>, PanelProps>

export const SplitterPanel: ComponentWithProps<SplitterPanelProps> = defineComponent({
  name: 'SplitterPanel',
  props: {
    id: {
      type: [String, Number] as PropType<SplitterPanelProps['id']>,
      required: true,
    },
    snapSize: Number as PropType<SplitterPanelProps['snapSize']>,
  },
  setup(props, { slots, attrs }) {
    const api = useSplitterContext()

    return () => (
      <ark.div {...api.value.getPanelProps(props)} {...attrs}>
        {() => getValidChildren(slots)}
      </ark.div>
    )
  },
})
