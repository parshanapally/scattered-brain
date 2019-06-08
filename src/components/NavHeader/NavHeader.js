import React from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './NavHeader.css'


const NavHeader = (props) => {
    return (
        <div class='navheader-container'>
            <Link to="/calendar/"> Calendar</Link>
            <Link to="/tasks/">Tasks</Link>
            <Link to="/"> Home</Link>
           
        </div>
    )
}

export default NavHeader