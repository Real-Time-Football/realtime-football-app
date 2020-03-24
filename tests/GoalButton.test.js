import React from 'react'
import Enzyme from 'enzyme'
import GoalButton from '../src/components/GoalButton'

describe('Goal Button', () => {
    const text = 'Button text'
    let wrapper

    beforeEach(() => {
        wrapper = Enzyme.shallow(<GoalButton>{text}</GoalButton>)
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

    it('renders correctly', () => {
        wrapper.setProps({
            'data-team-type': 'home',
        })

        expect(wrapper).toMatchSnapshot()
    })
})

describe('Button', () => {
    let mounted

    beforeEach(() => {
        const Button = GoalButton.defaultProps.Button
        mounted = Enzyme.mount(<Button data-team-type={'home'}></Button>)
    })

    // it('has the expected static styles', () => {
    //     expect(mounted).toHaveStyleRule('color', 'white')
    // })

    it('renders correctly', () => {
        expect(mounted).toMatchSnapshot()
    })
})
