import React, {Component} from 'react'
import NavHeader from '../NavHeader/NavHeader';
import './NewProject.css'

class NewProject extends Component {
    state= {
        name:'',
        description: ''
    }
    handleSubmit = (e) => {
        e.preventDefault()
    }

    render() {
        return (
            <div>
                <NavHeader></NavHeader>
                <div className='newprojectInput'>
                    <form handleSubmit={this.handleSubmit}>
                        <label>Project Name:</label>
                        <input type='text'></input>
                        <label>Description:</label>
                        <input type='text'></input>
                        <button className="newprojectButton">Save</button>
                    </form>
                </div>    
            </div>
        )

    }
   
}

export default NewProject