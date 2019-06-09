import React from 'react'
import NavHeader from '../NavHeader/NavHeader'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const Tasks = (props) => {
    return (
        <div>
            <NavHeader/>
            Start By Creating a Project
            <button><Link to='/new-project/'>Create a new Project</Link></button>
        </div>
    )
}

export default Tasks;