import React from 'react'
import Enzyme from 'enzyme'
import TeamScore from '../src/components/TeamScore'

describe('Team Score', () => {
    let wrapper
    const team = 'São Paulo'
    const side = 'HOME'

    beforeEach(() => {
        wrapper = Enzyme.shallow(<TeamScore team={team} side={side} />)
    })

    it('passes `team` through to the <header>', () => {
        expect(wrapper.childAt(0).text()).toBe(team)
    })

    it('passes `score` through to the <div>', () => {
        const score = 1
        wrapper.setProps({ score })
        expect(wrapper.childAt(2).text()).toBe('1')
    })

    it('has a initial `score` of 0', () => {
        expect(wrapper.childAt(2).text()).toBe('0')
    })

    it('render a <image> with team logo', () => {
        let mounted = Enzyme.mount(<TeamScore team={team} side={side} />)
        const imgUrl = 'src/assets/images/logo-sao-paulo-256.png'
        expect(mounted.find('img').prop('src')).toBe(imgUrl)
    })

    it('renders correctly', () => {
        let mounted = Enzyme.mount(<TeamScore team={team} side={side} />)
        expect(mounted).toMatchSnapshot()
    })
})
