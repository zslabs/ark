import type { RadioProps } from '@zag-js/radio-group'
import { defineComponent, reactive } from 'vue'
import { ark } from '../factory'
import { RadioProvider } from './radio-context'
import { useRadioGroupContext } from './radio-group-context'

// export type RadioProps =

// type RadioProps = {
//   value: string;
//   /**
//    * If `true`, the radio will be disabled
//    */
//   disabled?: boolean;
//   /**
//    * If `true`, the radio will be readonly
//    */
//   readOnly?: boolean;
//   /**
//    * If `true`, the radio is marked as invalid.
//    */
//   invalid?: boolean;
// };

export const Radio = defineComponent({
  name: 'Radio',
  props: VueProps,
  setup(props, { slots, attrs }) {
    const groupApi = useRadioGroupContext()
    const context = reactive(props) as RadioProps

    RadioProvider(context)

    return () => (
      <ark.label
        {...groupApi.value.getRadioProps({
          value: context.value || '',
          disabled: context.disabled,
        })}
        {...attrs}
      >
        {() => slots?.default?.(context)}
      </ark.label>
    )
  },
})
