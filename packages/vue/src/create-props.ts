import type { EnsureKeys } from './types'

export function createProps<Target>() {
  return function <Keys extends (keyof Target)[]>(keys: Keys & EnsureKeys<Keys, Target>) {
    return keys
  }
}
