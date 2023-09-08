import { defineComponent } from 'vue'
import { ark, type HTMLArkProps } from '../factory'
import { getValidChildren } from '../utils'
import { useRadioContext } from './radio-context'
import { useRadioGroupContext } from './radio-group-context'

export type RadioControlProps = HTMLArkProps<'div'>

export const RadioControl = defineComponent({
  name: 'RadioControl',
  setup(_, { slots, attrs }) {
    const api = useRadioGroupContext()
    const radioProps = useRadioContext()

    return () => (
      <>
        <ark.div {...api.value.getRadioControlProps(radioProps)} {...attrs}>
          {() => getValidChildren(slots)}
        </ark.div>
        <input {...api.value.getRadioHiddenInputProps(radioProps)} />
      </>
    )
  },
})
