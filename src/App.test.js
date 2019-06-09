import React from 'react'
import {expect} from 'code'
import {shallow} from "enzyme"
import App from './App'
import Home from './components/Home/Home'
import Calendar from './components/Calendar/Calendar'
import Tasks from "./components/Tasks/Tasks"
import NewProject from './components/NewProject/NewProject';

describe("Given App", () => {
    let component;

  function requiredProps(overrides={})  {
        return {
            ...overrides
        }
  }

  function renderComponent( props = requiredProps()) {
        return shallow(<App {...props}/>)
  }

  beforeEach(() => {
      component = renderComponent()
  })

  it("should exist", () => {
   
    expect(component).to.exist()
  })

  it('should render routes correctly', () => {

      let Route = component.find('Route')
      expect(Route).to.have.length(4)
      expect(Route.at(0).prop('path')).to.equal('/')
      expect(Route.at(0).prop('component')).to.equal(Home)

      expect(Route.at(1).prop('path')).to.equal('/calendar/')
      expect(Route.at(1).prop('component')).to.equal(Calendar)

      expect(Route.at(2).prop('path')).to.equal('/tasks/')
      expect(Route.at(2).prop('component')).to.equal(Tasks)

      expect(Route.at(3).prop('path')).to.equal('/new-project/')
      expect(Route.at(3).prop('component')).to.equal(NewProject)


  })
})