import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
import InfiniteCalendar from './src/index'
import moment from 'moment'

render(<InfiniteCalendar
       min={moment().startOf('month')}
       minDate={moment().startOf('day')}
       locale={{week: { dow: 0, doy: 4}}} />,
  document.getElementById('root')
)
