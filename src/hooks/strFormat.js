 const strFormat = string => {
  const resultString = string.replace(/[\W]/g, '')
  return resultString.charAt(0).toUpperCase() + resultString.slice(1).toLowerCase()
}

export default strFormat
