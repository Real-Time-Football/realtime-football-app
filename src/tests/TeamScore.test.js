import React from 'react'
import Enzyme from 'enzyme'
import TeamScore from '../main/TeamScore'

describe('Team Score', () => {
    it('renders a <div> with two <label> elements', () => {
        const wraper = Enzyme.shallow(<TeamScore />)
        expect(wraper.type()).toBe('div')
    })
})
