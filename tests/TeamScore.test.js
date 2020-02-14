import React from 'react'
import Enzyme from 'enzyme'
import TeamScore from '../src/components/TeamScore'

describe('Team Score', () => {
    let wrapper
    const teamDescription = 'Home'

    beforeEach(() => {
        wrapper = Enzyme.shallow(<TeamScore teamDescription={teamDescription} score={0} />)
    })

    it('renders a <div> with two <label> elements', () => {
        expect(wrapper.type()).toBe('div')
    })

    it('renders a two <div> as children', () => {
        expect(wrapper.childAt(0).type()).toBe('div')
        expect(wrapper.childAt(1).type()).toBe('div')
    })

    it('passes `teamName` through to the first <div>', () => {
        expect(wrapper.childAt(0).text()).toBe(teamDescription)
    })

    it('passes `score` through to the second <div>', () => {
        const score = 1
        wrapper.setProps({ score })
        expect(wrapper.childAt(1).text()).toBe('1')
    })

    it('passes other props through to the <div>', () => {
        const className = 'team-score'
        const style = {}
        const dataTeamType = 'home'
        wrapper.setProps({ className, style, 'data-team-type': dataTeamType })
        expect(wrapper.prop('className')).toBe(className)
        expect(wrapper.prop('style')).toBe(style)
        expect(wrapper.prop('data-team-type')).toBe(dataTeamType)
    })

    it('has a initial `score` of 0', () => {
        expect(wrapper.childAt(1).text()).toBe('0')
    })
})
