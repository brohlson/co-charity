export const formatDollars = raw => {
  let formatted = parseInt(raw) / 100
  let string = '$' + formatted
  return string
}
