import { defineComponent } from 'vue'
import { ark, type HTMLArkProps } from '../factory'
import { getValidChildren } from '../utils'
import { useRadioGroupContext } from './radio-group-context'

export type RadioGroupLabelProps = HTMLArkProps<'label'>

export const RadioGroupLabel = defineComponent({
  name: 'RadioGroupLabel',
  setup(_, { slots, attrs }) {
    const api = useRadioGroupContext()

    return () => (
      <ark.label {...api.value.labelProps} {...attrs}>
        {() => getValidChildren(slots)}
      </ark.label>
    )
  },
})
