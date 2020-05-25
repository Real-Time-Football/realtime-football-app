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
                        home: {
                            name: 'Palmeiras',
                        },
                        visitors: {
                            name: 'Corinthians',
                        },
                        score: {
                            home: 2,
                            visitors: 1,
                        },
                        currentPeriod: 'FIRST_PERIOD',
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

    it('update state `scoreHome` to 2', () => {
        expect(wrapper.state('scoreHome')).toBe(2)
    })

    it('update state `scoreVisitors` to 1', () => {
        expect(wrapper.state('scoreVisitors')).toBe(1)
    })

    it('update state `teamHome` to Palmeiras', () => {
        expect(wrapper.state('teamHome')).toBe('Palmeiras')
    })

    it('update state `teamVisitors` to Corinthians', () => {
        expect(wrapper.state('teamVisitors')).toBe('Corinthians')
    })

    it('update state `currentPeriod` to `1º Tempo`', () => {
        expect(wrapper.state('currentPeriod')).toBe('FIRST_PERIOD')
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

    it('renders the home team name in a TeamScore', () => {
        let name = 'São Paulo'
        wrapper.setState({ teamHome: name })
        console.log(wrapper)
        const teamName = wrapper
            .find('TeamScore')
            .at(0)
            .prop('team')
        expect(teamName).toBe(name)
    })

    it('renders the visitors team name in a TeamScore', () => {
        let name = 'Santos'
        wrapper.setState({ teamVisitors: name })
        console.log(wrapper)
        const teamName = wrapper
            .find('TeamScore')
            .at(1)
            .prop('team')
        expect(teamName).toBe(name)
    })

    it('renders current period in a styled component named stopwatch', () => {
        expect(wrapper.find('.stopwatch').text()).toBe('1º Tempo')
    })

    it('renders correctly', () => {
        wrapper = Enzyme.mount(<ScoreBoard></ScoreBoard>)
        expect(wrapper).toMatchSnapshot()
    })
})
