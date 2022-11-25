import React from 'react';
import NavBar from 'react-boot';
import Button from 'react-bootstrap/Navbar';
import { useSelector, useDispatch } from 'react-redux';
import { setCurrentUser, selectCurrentUser } from './/redux/userSlice';
import Axios from 'axios';
import Clock from './Clock';
import MiniCalendar from './MiniCalendar/MiniCalendar';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { Navbar } from 'react-bootstrap';


export default function NavMenu(props){
    const dispatch = useDispatch();
    let currentUser = useSelector(selectCurrentUser);

    const logout = () => {
        Axios.get('api/logout').then(() => {
            dispatch(setCurrentUser(null));
            // the ProtectedRoute component redirects to /login when user is set to null
        })
    }

    return (<>
    <Navbar.Brand>
        {/* Image by <a href="https://...></a> 
        from <a href="https://...">Piaxabay</a>*/}
        <img
         alt="..."
         src={require('..assets/images/..')}
         width="30"
         className="d-inline-block align-top"
         />
         {' '}
         Calendar
    </Navbar.Brand>
    </>)
}