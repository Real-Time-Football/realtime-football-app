import React from 'react'
import Enzyme from 'enzyme'
import GoalButton from '../main/GoalButton'

describe('Goal Button', () => {
    const text = 'Button text'
    let wrapper

    beforeEach(() => {
        wrapper = Enzyme.shallow(<GoalButton>{text}</GoalButton>)
    })

    it('renders a <butto>', () => {
        expect(wrapper.type()).toBe('button')
    })

    it('passes `children` to through the <button>', () => {
        expect(wrapper.prop('children')).toBe(text)
    })

    it('passes other props through to the <button>', () => {
        const onClick = () => {}
        const className = 'goal-button'
        const dataTeam = 'home'
        wrapper.setProps({ onClick, className, 'data-team': dataTeam })
        expect(wrapper.prop('onClick')).toBe(onClick)
        expect(wrapper.prop('className')).toBe(className)
        expect(wrapper.prop('data-team')).toBe(dataTeam)
    })
})
