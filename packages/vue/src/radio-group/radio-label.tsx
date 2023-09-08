import { defineComponent } from 'vue'
import { ark, type HTMLArkProps } from '../factory'
import { getValidChildren } from '../utils'
import { useRadioContext } from './radio-context'
import { useRadioGroupContext } from './radio-group-context'

export type RadioLabelProps = HTMLArkProps<'span'>

export const RadioLabel = defineComponent({
  name: 'RadioLabel',
  setup(_, { slots, attrs }) {
    const api = useRadioGroupContext()
    const radioProps = useRadioContext()

    return () => (
      <ark.span {...api.value.getRadioLabelProps(radioProps)} {...attrs}>
        {() => getValidChildren(slots)}
      </ark.span>
    )
  },
})
