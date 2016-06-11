import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
import InfiniteCalendar from './src/index'
import moment from 'moment'

let selectedDate = false
const onSelect = (day) => {
  console.log(day)
  selectedDate = day
}

render(<InfiniteCalendar
       min={moment().startOf('month')}
       minDate={moment().startOf('day')}
       locale={{week: { dow: 0, doy: 4}}} />,
  document.getElementById('root')
)
