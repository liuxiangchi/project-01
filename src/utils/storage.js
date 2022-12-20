export function setItem (key, value) {
  if (typeof value === 'object') {
    value = JSON.stringify(value)
  }
  localStorage.setItem(key, value)
}

export function getItem (key) {
  let value = localStorage.getItem(key)
  try {
    value = JSON.parse(value)
  } catch (err) {
    return value
  }
}
export function removeItem (key) {
  localStorage.removeItem(key)
}
