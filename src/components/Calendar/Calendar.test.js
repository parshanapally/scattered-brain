import React from 'react'
import {shallow} from 'enzyme'
import {expect} from 'code'
import Calendar from './Calendar'
import Chance from 'chance'


describe('Given Calendar', ()=> {
    let component;
    let chance = new Chance()

    function requiredProps( overrides={}) {
            return {
                ...overrides
            }
    }

    function renderComponent(props=requiredProps()) {
        return shallow(<Calendar {...props}/>)
    }

    beforeEach(()=> {
        component= renderComponent()
    })

    it('should exist', ()=> {
        expect(component).to.exist()
    })
    it('should contain <NavHeader/>', ()=> {
        let NavHeader = component.find('NavHeader')
        expect(NavHeader).to.have.length(1)
    })

    it('should contain <Calendar/>', () => {
        let Calendar = component.find('Calendar')
        expect(Calendar).to.have.length(1)
    })
    it('should contain default state', () => {
        let mockDate = new Date()
        expect(component.state().date).to.equal(mockDate)
    })
})