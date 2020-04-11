import React from 'react'
import Enzyme from 'enzyme'
import ScoreBoard from '../src/components/ScoreBoard'

describe('Score Board', () => {
    let wrapper

    beforeEach(() => {
        global.fetch = jest.fn()

        global.fetch.mockImplementation(() =>
            Promise.resolve({
                status: 200,
                json: () =>
                    Promise.resolve({
                        homeScore: 2,
                        visitorsScore: 1,
                    }),
            })
        )

        wrapper = Enzyme.shallow(<ScoreBoard></ScoreBoard>)
    })

    afterEach(done => {
        wrapper.unmount()
        global.fetch.mockClear()
        done()
    })

    it('render a <section>', () => {
        expect(wrapper.type()).toBe('section')
    })

    it('update state `scoreHome` to 2', () => {
        expect(wrapper.state('scoreHome')).toBe(2)
    })

    it('update state `scoreVisitors` to 1', () => {
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
        wrapper = Enzyme.mount(<ScoreBoard></ScoreBoard>)
        expect(wrapper).toMatchSnapshot()
    })
})
