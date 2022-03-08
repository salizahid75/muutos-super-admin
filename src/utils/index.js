export const validateFloatInput = text => {
    const reg = /^\d*\.?\d*$/
    if (reg.test(text)) return true
    return false
}

export const validateNumberInput = text => {
    const reg = /^\d*$/
    if (reg.test(text)) return true
    return false
}

export const debounce = (func, delay) => {
    let debounceTimer
    return function () {
      const context = this
      const args = arguments
      clearTimeout(debounceTimer)
      debounceTimer = setTimeout(() => func.apply(context, args), delay)
    }
  }
