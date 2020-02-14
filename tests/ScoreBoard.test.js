import React from 'react'
import { shallow } from 'enzyme'
import ScoreBoard from '../src/components/ScoreBoard'
import GoalButton from '../src/components/GoalButton'
import TeamScore from '../src/components/TeamScore'

describe('Score Board', () => {
    let wrapper

    beforeEach(() => {
        wrapper = shallow(<ScoreBoard></ScoreBoard>)
    })

    it('render a <div>', () => {
        expect(wrapper.type()).toBe('div')
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
        wrapper.find('GoalButton[data-team-type="home"]').simulate('click')
        expect(wrapper.state('scoreHome')).toBe(1)
    })

    it('increments `scoreVisitors` when GoalButton of visitors team is clicked', () => {
        wrapper.find('GoalButton[data-team-type="visitors"]').simulate('click')
        expect(wrapper.state('scoreVisitors')).toBe(1)
    })

    it('renders the current score home in a TeamScore', () => {
        wrapper.setState({ scoreHome: 1 })
        const teamHomeScore = wrapper.find('TeamScore[data-team-type="home"]').prop('score')
        expect(teamHomeScore).toBe(1)
    })

    it('renders the current score visitors in a TeamScore', () => {
        wrapper.setState({ scoreVisitors: 2 })
        const teamVisitorsScore = wrapper.find('TeamScore[data-team-type="visitors"]').prop('score')
        expect(teamVisitorsScore).toBe(2)
    })
})
