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
    let hour = dayjs().format('h A');     //format i.e 5 AM
    const [calendar, setCalendar] = useState();  //rendering Calendar.js 
    const [weekCounter, setWeekCounter] = useState(0); //tracks days of the week in the calendar with increment of 7
    const dispatch = useDispatch();

    /*set current date upon first rendering */
    useEffect(()=> {
        dispatch(setCurrentDate({
            day: day,
            date: date,
            hour: hour,
            weekCounter: weekCounter
            
        }))
    }, [])

    /*back button*/

    const back = () => {
        let week = weekCounter + 7;
    }
}