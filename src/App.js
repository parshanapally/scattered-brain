import React, {Component} from 'react'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import Home from './components/Home/Home'
import Calendar from './components/Calendar/Calendar'
import Tasks from './components/Tasks/Tasks'

class App extends Component {
render() {
    return (
      <div>
        <Router>
            <Route path='/' component={Home} ></Route>
            <Route path='/calendar/' component={Calendar}></Route>
            <Route path='/tasks/' component={Tasks}></Route>
        </Router>
      </div>
      
       
        
    )
}
}

export default App;