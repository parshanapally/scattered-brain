import React from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const Home = (props ) => {
return (
    <div> 
      <h2>Scattered Brains</h2>
      <p>How to live with an organized matter</p>
      <Link to="/calendar/"><button>Calendar</button></Link>
      <Link to="/tasks/"><button>Tasks</button></Link>
    
    </div>
)
}

export default Home;