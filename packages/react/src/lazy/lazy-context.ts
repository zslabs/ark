import { createContext } from '../create-context'

export type LazyContext = {
  hidden: boolean
}

export const [LazyProvider, useLazyContext] = createContext<LazyContext>({
  name: 'LazyContext',
  hookName: 'useLazyContext',
  providerName: '<LazyProvider />',
})
