import React from 'react'
import { render, screen } from '@testing-library/react'
import TeamScore from '../src/components/TeamScore'

describe('Team Score', () => {
    // let wrapper
    let component
    const team = 'São Paulo'
    const side = 'HOME'

    beforeEach(() => {
        component = render(<TeamScore team={team} side={side} />)
    })

    it('passes `team` through to the <header>', () => {
        expect(component.getByTestId('team-name-header').textContent).toBe(team)
    })

    it('passes `score` through to the <div>', () => {
        const score = 1
        component.rerender(<TeamScore team={team} side={side} score={score} />)
        expect(component.getByTestId('score-label').textContent).toBe('1')
    })

    it('has a initial `score` of 0', () => {
        expect(component.getByTestId('score-label').textContent).toBe('0')
    })

    it('render a <image> with team logo', () => {
        const imgUrl = 'src/assets/images/logo-sao-paulo-256.png'
        expect(screen.getByRole('img').getAttribute('src')).toBe(imgUrl)
    })

    it('renders correctly', () => {
        expect(component).toMatchSnapshot()
    })
})
