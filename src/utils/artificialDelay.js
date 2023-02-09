export const artificialDelay = (callback, delay) => {
  const timeout = setTimeout(() => {
    callback()
    clearTimeout(timeout)
  }, delay)
}