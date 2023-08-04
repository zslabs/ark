import { defineComponent } from 'vue'
import { ark } from '../factory'
import { AvatarProvider } from './avatar-context'
import { useAvatar } from './use-avatar'

// export type AvatarProps = InstanceType<typeof Avatar>

type AvatarProps = {
  id?: string
}

export const Avatar = defineComponent({
  name: 'Avatar',
  props: {
    id: {
      type: String,
    },
  },

  setup(props, { emit, attrs, slots }) {
    const api = useAvatar(emit, props)
    AvatarProvider(api)

    return () => (
      <ark.div {...api.value.rootProps} {...attrs}>
        {slots.default?.()}
      </ark.div>
    )
  },
})
