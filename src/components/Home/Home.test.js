import React from 'react'
import {expect} from 'code'
import  {shallow} from 'enzyme'
import Home from './Home'
import { isTSAnyKeyword } from '@babel/types';


describe("Given Home", () => {
    let component;

    function requiredProps(overrides={}) {
        return {
            ...overrides
        }
    }

    function renderComponent(props = requiredProps()) {
        return shallow(<Home {...props}/>)
    }

    beforeEach(() => {
        component = renderComponent()
    })

    it("should exist", () => {
        expect(component).to.exist()
    })

    it('should contain two buttons', ()=> {
        let button = component.find('button')
        expect(button).to.have.length(2)
    })
    it("should contain two <Link/>", () => {
        let Link = component.find('Link')
        expect(Link).to.have.length(2)
        expect(Link.at(0).prop('to')).to.equal('/calendar/')
        expect(Link.at(1).prop('to')).to.equal('/tasks/')
    })
})