import React from 'react'
import Enzyme from 'enzyme'
import ScoreBoard from '../src/components/ScoreBoard'
import GoalButton from '../src/components/GoalButton'

describe('Score Board', () => {
    let wrapper

    beforeEach(() => {
        wrapper = Enzyme.shallow(<ScoreBoard></ScoreBoard>)
    })

    it('render a <section>', () => {
        expect(wrapper.type()).toBe('section')
    })

    it('has a initial `scoreHome` of 0', () => {
        expect(wrapper.state('scoreHome')).toBe(0)
    })

    it('has a initial `scoreVisitors` of 0', () => {
        expect(wrapper.state('scoreVisitors')).toBe(0)
    })

    it('render a GoalButton labeled "Goal Home"', () => {
        expect(
            wrapper
                .find(GoalButton)
                .at(0)
                .prop('children')
        ).toBe('Goal Home')
    })

    it('render a GoalButton labeled "Goal Visitors"', () => {
        expect(
            wrapper
                .find(GoalButton)
                .at(1)
                .prop('children')
        ).toBe('Goal Visitors')
    })

    it('increments `scoreHome` when GoalButton of home team is clicked', () => {
        wrapper
            .find('GoalButton')
            .at(0)
            .simulate('click')
        expect(wrapper.state('scoreHome')).toBe(1)
    })

    it('increments `scoreVisitors` when GoalButton of visitors team is clicked', () => {
        wrapper
            .find('GoalButton')
            .at(1)
            .simulate('click')
        expect(wrapper.state('scoreVisitors')).toBe(1)
    })

    it('renders the current score home in a TeamScore', () => {
        wrapper.setState({ scoreHome: 1 })
        console.log(wrapper)
        const teamHomeScore = wrapper
            .find('TeamScore')
            .at(0)
            .prop('score')
        expect(teamHomeScore).toBe(1)
    })

    it('renders the current score visitors in a TeamScore', () => {
        wrapper.setState({ scoreVisitors: 2 })
        const teamVisitorsScore = wrapper
            .find('TeamScore')
            .at(1)
            .prop('score')
        expect(teamVisitorsScore).toBe(2)
    })

    it('renders correctly', () => {
        let mounted = Enzyme.mount(<ScoreBoard></ScoreBoard>)
        expect(mounted).toMatchSnapshot()
    })
})
