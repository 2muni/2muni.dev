import React from 'react'
import { ContextProvider } from './src/utils/Context'
export const wrapRootElement = ({ element }) => (
  <ContextProvider>{element}</ContextProvider>
)
