import React, { useEffect, useContext, useRef } from 'react'
import { Context } from '../../utils/Context'

const repo = require('../../../package.json')
  .repository.split('/')
  .splice(3, 2)
  .join('/')

const src = 'https://utteranc.es/client.js'

const Utterances = () => {
  const rootElm = useRef()
  const {
    state: { theme },
  } = useContext(Context)
  useEffect(() => {
    const utterances = document.createElement('script')
    const config = {
      src,
      repo,
      theme: theme === 'dark' ? 'github-dark' : 'github-light',
      'issue-term': 'pathname',
      crossorigin: 'anonymous',
      async: true,
    }

    Object.keys(config).forEach(key => {
      utterances.setAttribute(key, config[key])
    })

    rootElm.current.appendChild(utterances)
  }, [])

  return <div className="utterances" ref={rootElm} />
}

export default Utterances
