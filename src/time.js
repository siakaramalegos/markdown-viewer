import format from 'date-fns/format'

// We are using this contrived date/time example to learn about importing correctly and choosing more efficient libraries. IRL, we should also consider whether a library is needed at all. For formatting, we probably don't need a library. Actually manipulating time can be tricky so would warrant the use of a library.

export function timeNowPretty() {
  const now = new Date()
  const displayFormat = 'hh:mm:ss MM/DD/YYYY'
  return format(now, displayFormat)
}
