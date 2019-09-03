import React, { useReducer, useEffect } from 'react'
import config from './siteConfig'

const Context = React.createContext()

const initialState = {
  theme: 'light',
  locale: `${config.defaultLocale}`,
}

const reducer = (state, nextState) => {
  if (nextState === null) {
    localStorage.removeItem('state')
    return initialState
  }
  return { ...state, ...nextState }
}

const ContextProvider = ({ children }) => {
  const [state, setState] = useReducer(reducer, initialState)
  useEffect(() => {
    setState(JSON.parse(localStorage.getItem('state')))
  }, [])
  useEffect(() => {
    localStorage.setItem('state', JSON.stringify(state))
  }, [state])

  return (
    <Context.Provider value={{ state, setState }}>{children}</Context.Provider>
  )
}

export { Context, ContextProvider }
