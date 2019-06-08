import React, {Component} from 'react'
import NavHeader from '../NavHeader/NavHeader';
import Calendar from 'react-calendar';
import './Calendar.css'

class CalendarRoute extends Component {

    state = {
        date: new Date(),
      }
    render() {
        return (
            <div>
                <NavHeader/> 
                <Calendar    
                    onChange={this.onChange}
                    value={this.state.date}>
                </Calendar>
            </div>
        )
    }

}

export default CalendarRoute;