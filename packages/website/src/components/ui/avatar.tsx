import * as Ark from '@ark-ui/react/src/avatar'
import { styled } from '@ark-ui/styled-system/jsx'
import { avatar, type AvatarVariantProps } from '@ark-ui/styled-system/recipes'
import { createStyleContext } from '~/lib/create-style-context'

const { withProvider, withContext } = createStyleContext(avatar)

export * from '@ark-ui/react/src/avatar'
export type AvatarProps = Ark.AvatarProps & AvatarVariantProps

const AvatarRoot = withProvider(styled(Ark.Avatar.Root), 'root')
export const AvatarFallback = withContext(styled(Ark.Avatar.Fallback), 'fallback')
export const AvatarImage = withContext(styled(Ark.Avatar.Image), 'image')

export const Avatar = Object.assign(AvatarRoot, {
  Root: AvatarRoot,
  Fallback: AvatarFallback,
  Image: AvatarImage,
})
