export default (() => {
  if (typeof localStorage !== 'undefined') {
    return localStorage
  }
  return undefined
})()
