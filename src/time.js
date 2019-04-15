import moment from 'moment';

// We are using this contrived date/time example to learn about importing correctly and choosing more efficient libraries. IRL, we should also consider whether a library is needed at all. For formatting, we probably don't need a library. Actually manipulating time can be tricky so would warrant the use of a library.
export function timeNowPretty() {
  const now = moment()
  const displayFormat = 'hh:mm:ss MM/DD/YYYY'
  return now.format(displayFormat)
}
