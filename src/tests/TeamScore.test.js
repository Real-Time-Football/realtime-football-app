import React from 'react'
import { configure, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import TeamScore from '../main/TeamScore'

configure({ adapter: new Adapter() })

describe('Team Score', () => {
    it('renders a <div> with two <label> elements', () => {
        const wraper = shallow(<TeamScore />)
        expect(wraper.type()).toBe('div')
    })
})
