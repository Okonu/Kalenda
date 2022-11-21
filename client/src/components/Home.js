import React, {useState, useEffect} from 'react';
import Calendar from './Calendar';
import NavMenu from './NavMenu';

import { setCurrentDate, selectCurrentDate } from '../redux/dateSlice';
import { useSelector, useDispatch } from 'react-redux';
import MiniCalendar from '../MiniCalendar/MiniCalendar';

const dayjs = require('dayjs');

export default function Home(){
    let day = dayjs().format('dddd'); //the name of the day i.e Monday
    let date = dayjs().format('MMMMM D'); //format i.e November 21
    let hour = dayjs().format('h A');
}