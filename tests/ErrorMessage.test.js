import React from 'react'
import Enzyme from 'enzyme'
import ErrorMessage from '../src/components/ErrorMessage'
import styled from 'styled-components'

describe('', () => {
    let mounted
    const errorMessage = 'Code 500'

    beforeEach(() => {
        mounted = Enzyme.mount(<ErrorMessage message={errorMessage}></ErrorMessage>)
    })

    it('renders a `div` with error message', () => {
        expect(mounted.text()).toBe(`Error: ${errorMessage}`)
    })

    describe('Error Container', () => {
        let mounted

        beforeEach(() => {
            const ErrorContainer = ErrorMessage.defaultProps.ErrorContainer
            mounted = Enzyme.mount(<ErrorContainer></ErrorContainer>)
        })

        it('renders a `div`', () => {
            expect(mounted.containsMatchingElement(<div></div>)).toBe(true)
        })

        it.skip('has expected static styles with error color', () => {
            expect(mounted).toHaveStyleRule('color', '#721c24')
            expect(mounted).toHaveStyleRule('background-color', '#f8d7da')
            expect(mounted).toHaveStyleRule('border', '1px solid #f5c6cb')
        })

        it.skip('allows style to be overridden', () => {
            const AlertContainer = styled(ErrorMessage.defaultProps.ErrorContainer)`
                color: #856404;
                background-color: #fff3cd;
                border: 1px solid #ffeeba;
            `

            mounted = Enzyme.mount(<AlertContainer></AlertContainer>)

            expect(mounted).toHaveStyleRule('color', '#856404')
            expect(mounted).toHaveStyleRule('background-color', '#fff3cd')
            expect(mounted).toHaveStyleRule('border', '1px solid #ffeeba')
        })
    })
})
