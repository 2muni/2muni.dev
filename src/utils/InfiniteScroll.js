import { useState, useEffect } from 'react'

const InfiniteScroll = (list, coef) => {
  const [page, setPage] = useState(1)
  const [LoadState, setLoadState] = useState(false)

  const onScroll = () => {
    const scrollHeight = Math.max(
      document.documentElement.scrollHeight,
      document.body.scrollHeight
    )
    const scrollTop = Math.max(
      document.documentElement.scrollTop,
      document.body.scrollTop
    )
    const clientHeight = document.documentElement.clientHeight
    const BASE_TOP = document.documentElement.clientHeight / 3

    if (scrollHeight - (scrollTop + clientHeight) < BASE_TOP) {
      setLoadState(true)
    } else setLoadState(false)
  }

  useEffect(() => {
    window.addEventListener('scroll', onScroll, { passive: false })
    return () => {
      window.removeEventListener('scroll', onScroll, { passive: false })
    }
  }, [])
  useEffect(() => {
    if (LoadState && list.length / coef > page) {
      setPage(page + 1)
    }
  }, [LoadState])

  return [page, setPage, LoadState]
}

export default InfiniteScroll
