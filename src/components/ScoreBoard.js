import React from 'react'
import TeamScore from './TeamScore'
import styled, { keyframes } from 'styled-components'
import { parsePeriod } from './matchFunctions'

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

const Separator = styled.div`
    font-size: 14px;
    font-style: weigth;
    color: #999;
`

const Stopwatch = styled.div`
    font-size: 14px;
    color: #555;
    position: absolute;
    margin-top: 40px;
    margin-left: -7px;
`

class ScoreBoard extends React.PureComponent {
    state = {
        error: null,
        isLoaded: false,
        scoreHome: 0,
        scoreVisitors: 0,
        teamHome: 'Casa',
        teamVisitors: 'Visitante',
        currentPeriod: null,
    }

    componentDidMount() {
        const params = new URLSearchParams(location.search)
        fetch('http://localhost:8080/match/' + params.get('match'))
            .then(res => res.json())
            .then(
                match => {
                    this.setState({
                        isLoaded: true,
                        scoreHome: match.score.home,
                        scoreVisitors: match.score.visitors,
                        teamHome: match.home.name,
                        teamVisitors: match.visitors.name,
                        currentPeriod: match.currentPeriod,
                    })
                    console.log('match: ', match)
                },
                error => {
                    this.setState({ isLoaded: false, error })
                    console.log('error: ', error)
                }
            )
    }

    render() {
        const { error, isLoaded, scoreHome, scoreVisitors, teamHome, teamVisitors, currentPeriod } = this.state

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
                        <TeamScore side={'HOME'} team={teamHome} score={scoreHome}></TeamScore>
                        <Separator>X</Separator>
                        <Stopwatch className="stopwatch">{parsePeriod(currentPeriod)}</Stopwatch>
                        <TeamScore
                            side={'VISITORS'}
                            team={teamVisitors}
                            score={scoreVisitors}
                            reverse={true}
                        ></TeamScore>
                    </ScoreContainer>
                </section>
            )
        }
    }
}

export default ScoreBoard
