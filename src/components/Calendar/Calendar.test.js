import React from 'react'
import {shallow} from 'enzyme'
import {expect} from 'code'
import Calendar from './Calendar'


describe('Given Calendar', ()=> {
    let component;

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
})