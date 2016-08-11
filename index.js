import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
import InfiniteCalendar from './src/index'

render(<InfiniteCalendar />,
  document.getElementById('root')
)
