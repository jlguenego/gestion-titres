export const openFile = (): Promise<string> => {
  return new Promise((resolve, reject) => {
    const elt = document.createElement('input')
    elt.setAttribute('type', 'file')
    elt.setAttribute('id', 'fileInput')
    elt.style.display = 'none'
    document.body.appendChild(elt)

    const finallyResolve = (result: string) => {
      document.body.removeChild(elt)
      resolve(result)
    }

    const finallyReject = (err: Error) => {
      document.body.removeChild(elt)
      reject(err)
    }

    elt.addEventListener('change', () => {
      console.log('elt.files: ', elt.files)
      if (elt.files === null || !elt.files[0]) {
        finallyReject(new Error('no file'))
        return
      }
      const file = elt.files[0]
      const reader = new FileReader()
      reader.onload = () => {
        const content = reader.result
        if (typeof content !== 'string') {
          reject(new Error('not a string'))
          return
        }
        finallyResolve(content)
        return
      }

      reader.onerror = (e) => {
        console.error('Error reading file:', e)
        finallyReject(new Error('unexpected error'))
      }

      reader.readAsText(file)
    })

    elt.click()
  })
}
