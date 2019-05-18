import React from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


const NavHeader = (props) => {
    return (
        <div>
            <Link to="/"> Home</Link>
            <Link to="/calendar/"> Calendar</Link>
            <Link to="/tasks/">Tasks</Link>
        </div>
    )
}

export default NavHeader