import React from 'react'
import {shallow} from 'enzyme'
import {expect} from 'code'
import NavHeader from './NavHeader'


describe("Given NavHeader", () => {
    let component;

  function requiredProps(overrides={})  {
        return {
            ...overrides
        }
  }

  function renderComponent( props = requiredProps()) {
        return shallow(<NavHeader {...props}/>)
  }

  beforeEach(() => {
      component = renderComponent()
  })

  it("should exist", () => {
    expect(component).to.exist()
  })

  it('should contain three <Link/>', ()=> {
      let Link = component.find('Link')
      expect(Link).to.have.length(3)

      expect(Link.at(0).prop('to')).to.equal('/')
      expect(Link.at(1).prop('to')).to.equal('/calendar/')
      expect(Link.at(2).prop('to')).to.equal('/tasks/')
  })

  
})