import React from 'react'
import {expect} from 'code'
import {shallow} from 'enzyme'
import NewProject from './NewProject';
import { isTSAnyKeyword } from '@babel/types';

describe('Given NewProject', () => {
    let component 

    function requiredProps(overrides={}) {
        return {
            ...overrides
        }
    }

    function renderComponent(props=requiredProps()) {
        return shallow(<NewProject {...props}/>)
    }

    beforeEach(() => {
        component = renderComponent()
    })

    it('should exist', () => {
        expect(component).to.have.length(1)
    })

    it('should contain default state', () => {
        expect(component.state().name).to.equal('')
        expect(component.state().description).to.equal('')
    })

    it('should simulate form with handleSubmit()', () => {
        const form = component.find('form')
        form.simulate('click', {preventDefault: () => {}})
    })
})