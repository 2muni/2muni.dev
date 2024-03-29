import { useState, useEffect } from 'react'
import throttle from 'lodash/throttle'

export default (list, coef) => {
  const [page, setPage] = useState(1)
  const [LoadState, setLoadState] = useState(false)

  const onScroll = () => {
    console.log('fire')
    const scrollHeight = Math.max(
      document.documentElement.scrollHeight,
      document.body.scrollHeight
    )
    const scrollTop = Math.max(
      document.documentElement.scrollTop,
      document.body.scrollTop
    )
    const clientHeight = document.documentElement.clientHeight
    const BASE_TOP = document.documentElement.clientHeight / 1.5

    if (scrollHeight - (scrollTop + clientHeight) < BASE_TOP) {
      setLoadState(true)
    } else setLoadState(false)
  }

  useEffect(() => {
    window.addEventListener('scroll', throttle(onScroll, 300), {
      passive: true,
    })
    return () => {
      window.removeEventListener('scroll', throttle(onScroll, 300), {
        passive: true,
      })
    }
  }, [])
  useEffect(() => {
    if (LoadState && list.length / coef > page) {
      setPage(page + 1)
    }
  }, [LoadState])

  return [page, setPage, LoadState]
}
