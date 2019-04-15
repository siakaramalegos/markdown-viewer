// We are using this contrived date/time example to learn about importing correctly and choosing more efficient libraries. IRL, we should also consider whether a library is needed at all. For formatting, we probably don't need a library. Actually manipulating time can be tricky so would warrant the use of a library.

async function loadDateFnsFormat() {
  // Dynamically import lodash/isEmpty and marked
  const { default: format } = await import('date-fns/format' /* webpackChunkName: "date-fns/format" */)

  return format
}

export function timeNowPretty() {
  loadDateFnsFormat()
    .then( format => {
      const now = new Date()
      const displayFormat = 'hh:mm:ss MM/DD/YYYY'
      return format(now, displayFormat)
    })
}
