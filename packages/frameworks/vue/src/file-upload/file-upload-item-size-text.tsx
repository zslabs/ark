import { defineComponent } from 'vue'
import { ark, type HTMLArkProps } from '../factory'
import { useFileUploadContext } from './file-upload-context'
import { useFileUploadItemContext } from './file-upload-item-context'

export interface FileUploadItemSizeTextProps extends HTMLArkProps<'div'> {}

export const FileUploadItemSizeText = defineComponent({
  name: 'FileUploadItemSizeText',
  setup(_, { slots, attrs }) {
    const api = useFileUploadContext()
    const item = useFileUploadItemContext()

    return () => (
      <ark.div {...api.value.getItemSizeTextProps(item.value)} {...attrs}>
        {slots.default?.()}
      </ark.div>
    )
  },
})
