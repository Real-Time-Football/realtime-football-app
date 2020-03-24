import React from 'react'
import Enzyme, { mount } from 'enzyme'
import GoalButton from '../src/components/GoalButton'

describe('Goal Button', () => {
    const text = 'Button text'
    let wrapper

    beforeEach(() => {
        wrapper = Enzyme.shallow(<GoalButton>{text}</GoalButton>)
    })

    it('renders a <button>', () => {
        const mounted = Enzyme.mount(<GoalButton data-team-type={'home'}>{text}</GoalButton>)
        expect(mounted.containsMatchingElement(<button data-team-type={'home'}>{text}</button>)).toBe(true)
    })

    it('passes `children` to through the <button>', () => {
        expect(wrapper.prop('children')).toBe(text)
    })

    it('passes other props through to the <button>', () => {
        const onClick = () => {}
        const className = 'goal-button'
        const dataTeamType = 'home'
        wrapper.setProps({ onClick, className, 'data-team-type': dataTeamType })
        expect(wrapper.prop('onClick')).toBe(onClick)
        expect(wrapper.prop('className')).toBe(className)
        expect(wrapper.prop('data-team-type')).toBe(dataTeamType)
    })
})
