export const printLocalStorageSizeInKB = () => {
  let _lsTotal = 0
  let _xLen = 0
  for (const _x in localStorage) {
    // eslint-disable-next-line no-prototype-builtins
    if (!localStorage.hasOwnProperty(_x)) {
      continue
    }
    _xLen = (localStorage[_x].length + _x.length) * 2
    _lsTotal += _xLen
    console.log(_x.substring(0, 50) + ' = ' + (_xLen / 1024).toFixed(2) + ' KB')
  }
  console.log('Total = ' + (_lsTotal / 1024).toFixed(2) + ' KB')
}
