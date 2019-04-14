import moment from 'moment';

export function timeNowPretty() {
  const now = moment()
  const displayFormat = 'hh:mm:ss MM/DD/YYYY'
  return now.format(displayFormat)
}
