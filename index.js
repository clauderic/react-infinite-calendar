import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
import InfiniteCalendars from './src/index'

render(<InfiniteCalendars />,
  document.getElementById('root')
)
