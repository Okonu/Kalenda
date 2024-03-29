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
        let week = weekCounter - 7;
    date = dayjs(new Date(new Date().setDate(new Date().getDate() + week))).format('MMMM D');
    setWeekCounter(week);
    dispatch(setCurrentDate({
      day: day,
      date: date,
      hour: hour,
      weekCounter: week
    }))
  }
  /*Forward button.  */
  const forward = () => {
    let week = weekCounter + 7;
    date = dayjs(new Date(new Date().setDate(new Date().getDate() + week))).format('MMMM D');
    console.log(date)
    setWeekCounter(week);
    dispatch(setCurrentDate({
      day: day,
      date: date,
      hour: hour,
      weekCounter: week
    }))
  }

  /** Goes to the current week, and scrolls the current time into view. */
  const goToToday = () => {
    dispatch(setCurrentDate({
      day: day,
      date: date,
      hour: hour,
      weekCounter: 0
    }))
    //the calendar needs to updated every week before it can be scrolled into view
    setTimeout(() => {
      try {
        document.getElementsByClassName('current-hour')[0].scrollIntoView({behavior: 'smooth', block: 'center'})
      } catch (TypeError) {
        setTimeout(() => {
          try {
            document.getElementsByClassName('current-hour')[0].scrollIntoView({behavior: 'smooth', block: 'center'})
          } catch (TypeError) {
            console.error(TypeError)
          }
        }, 700)
      }
    }, 300)
  }

  //re-rendering the calendar after getting the date
  useEffect(() => {
    if (setCurrentDate.day){
      setCalendar(<Calendar />)
    }
    return () => {
      setCalendar()
    }
  }, [currentDate])

  return (
    <>
      <NavMenu goToToday={goToToday} />
      <div className='btn-container'>
        <button className='btn btn-success' id='back-btn' onClick={back}>Back</button>
        <div id='empty-btn-div'></div>
        <button className='btn btn-success' id='forward-btn' onClick={forward}>Forward</button>
        </div>
        </>
  )
}