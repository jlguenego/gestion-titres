export const log = (...args: unknown[]) => {
  console.log('%cuser log', 'font-weight: bold', ...args)
}
