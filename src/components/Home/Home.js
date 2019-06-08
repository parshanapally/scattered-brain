import React from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./Home.css"

const Home = (props ) => {
return (
    <div className="home-container"> 
      <h2>Scattered Brains</h2>
      <p>How to live with an organized mess</p>
     <div className="button-container">
        <button><Link to="/calendar/">Calendar</Link></button>
        <button> <Link to="/tasks/">Tasks</Link></button>
     </div>
    </div>
)
}

export default Home;