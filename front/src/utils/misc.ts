export const sleep = (delay: number) => {
  return new Promise((resolve) => setTimeout(resolve, delay))
}

export const clone = <T>(obj: T): T => {
  return JSON.parse(JSON.stringify(obj))
}
