import { fileUploadAnatomy } from '@ark-ui/anatomy'
import { render } from '@testing-library/vue'
import { getParts } from '../../setup-test'
import ComponentUnderTest from './file-upload.test.vue'

describe('FileUpload', () => {
  it.skip.each(getParts(fileUploadAnatomy))('should render part %s', async (part) => {
    render(ComponentUnderTest)
    expect(document.querySelector(part)).toBeInTheDocument()
  })
})
