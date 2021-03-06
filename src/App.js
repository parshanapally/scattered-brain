import React, {Component} from 'react'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import Home from './components/Home/Home'
import Calendar from './components/Calendar/Calendar'
import Tasks from './components/Tasks/Tasks'
import NewProject from './components/NewProject/NewProject'
import "./App.css"

class App extends Component {
render() {
    return (
      <div>
        <Router>
            <Route exact path='/' component={Home} ></Route>
            <Route exact path='/calendar/' component={Calendar}></Route>
            <Route exact path='/tasks/' component={Tasks}></Route>
            <Route exact path='/new-project/' component={NewProject}></Route>
        </Router>
      </div>
      
       
        
    )
}
}

export default App;