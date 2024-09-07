export const sleep = (delay: number) => {
  return new Promise((resolve) => setTimeout(resolve, delay))
}

export const clone = <T>(obj: T): T => {
  return JSON.parse(JSON.stringify(obj))
}

export const retryUntil = async (callback: () => void, timeout = 4000) => {
  const start = Date.now()
  let retry = true
  while (retry) {
    try {
      console.log('retryUntil')
      callback()
      retry = false
    } catch (err) {
      if (start + timeout < Date.now()) {
        return
      }
      await sleep(100)
    }
  }
}
