import React from 'react'
import TeamScore from './TeamScore'
import styled, { keyframes } from 'styled-components'

const ScoreContainer = styled.article`
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: Arial, Helvetica, sans-serif;
    padding: 30px 0;
`

const ErrorContainer = styled.div`
    font-family: Arial, Helvetica, sans-serif;
    color: #721c24;
    background-color: #f8d7da;
    position: relative;
    padding: 15px 20px;
    margin-bottom: 10px;
    border: 1px solid #f5c6cb;
    border-radius: 5px;
`

const dualRingRotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`

const LoadingDualRing = styled.div`
    display: inline-block;
    width: 80px;
    height: 80px;

    &:after {
        content: ' ';
        display: block;
        width: 32px;
        height: 32px;
        margin: 10px;
        border-radius: 50%;
        border: 3px solid #6495ed;
        border-color: #6495ed transparent #6495ed transparent;
        animation: ${dualRingRotate} 1.2s linear infinite;
    }
`

class ScoreBoard extends React.PureComponent {
    state = {
        error: null,
        isLoaded: false,
        scoreHome: 0,
        scoreVisitors: 0,
    }

    componentDidMount() {
        fetch('http://localhost:8080/match/4e9ea4e7-007e-46c0-b738-924d62bff616')
            .then(res => res.json())
            .then(
                result => {
                    this.setState({ isLoaded: true, scoreHome: result.homeScore, scoreVisitors: result.visitorsScore })
                    console.log('match: ', result)
                },
                error => {
                    this.setState({ isLoaded: false, error })
                    console.log('error: ', error)
                }
            )
    }

    render() {
        const { error, isLoaded, scoreHome, scoreVisitors } = this.state

        if (this.state.error) {
            return (
                <ErrorContainer>
                    <strong>Error:</strong> {error.message}
                </ErrorContainer>
            )
        } else if (!isLoaded) {
            return <LoadingDualRing></LoadingDualRing>
        } else {
            return (
                <section>
                    <ScoreContainer>
                        <TeamScore side={'HOME'} team={'São Paulo'} score={scoreHome}></TeamScore>
                        <div>x</div>
                        <TeamScore side={'VISITORS'} team={'Santos'} score={scoreVisitors} reverse={true}></TeamScore>
                    </ScoreContainer>
                </section>
            )
        }
    }
}

export default ScoreBoard
