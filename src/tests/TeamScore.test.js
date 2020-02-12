import React from 'react'
import Enzyme from 'enzyme'
import TeamScore from '../main/TeamScore'

describe('Team Score', () => {
    let wrapper
    const teamName = 'Home'

    beforeEach(() => {
        wrapper = Enzyme.shallow(<TeamScore teamName={teamName} />)
    })

    it('renders a <div> with two <label> elements', () => {
        expect(wrapper.type()).toBe('div')
    })

    it('renders a two <div> as children', () => {
        expect(wrapper.childAt(0).type()).toBe('div')
        expect(wrapper.childAt(1).type()).toBe('div')
    })

    it('passes `teamName` through to the first <div>', () => {
        expect(wrapper.childAt(0).text()).toBe(teamName)
    })
})
