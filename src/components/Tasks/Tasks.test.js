import React from 'react'
import {shallow} from 'enzyme'
import {expect} from 'code'
import Tasks from './Tasks'


describe("Given Tasks", () => {
    let component;

    function requiredProps(overrides={}) {
        return {
            ...overrides
        }
    }

    function renderComponent(props=requiredProps()) {
        return shallow(<Tasks {...props}></Tasks>)
    }

    beforeEach(() => {
        component = renderComponent()
    })

    it('should exist', () => {
        expect(component).to.exist()
    })

    it('should contain <NavHeader/>', ()=> {
        let NavHeader = component.find('NavHeader')
        expect(NavHeader).to.have.length(1)
    })

    it('should contain a button', () => {
        let button = component.find('button')
        expect(button).to.have.length(1)
    })

    it('should contain Link', () => {
        let Link = component.find('Link')
        expect(Link).to.have.length(1)
    })
})