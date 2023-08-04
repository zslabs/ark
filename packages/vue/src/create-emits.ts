import type { EnsureKeys } from './types'

type PickEventKeys<Target> = {
  [Key in keyof Target as Key extends `on${infer Event}` ? Lowercase<Event> : never]: Key
}

export function createEmits<Target>() {
  return function <Keys extends (keyof PickEventKeys<Target>)[]>(
    keys: Keys & EnsureKeys<Keys, PickEventKeys<Target>>,
  ) {
    return keys
  }
}
