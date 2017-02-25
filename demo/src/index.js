import React from 'react';
import {render} from 'react-dom';
import InfiniteCalendar from '../../src';
import '../../styles.css';
import './demo.css';

render(
  <InfiniteCalendar
    width={Math.min(window.innerWidth, 400)}
  />
, document.querySelector('#demo'));
