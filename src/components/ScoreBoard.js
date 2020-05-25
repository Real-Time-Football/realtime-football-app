import React from 'react'
import PropTypes from 'prop-types'
import TeamScore from './TeamScore'
import Loading from './Loading'
import ErrorMessage from './ErrorMessage'
import styled from 'styled-components'
import { parseMatchPeriod } from './matchHelpers'

const DefaultScoreContainer = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: Arial, Helvetica, sans-serif;
    padding: 30px 0;
`

const DefaultSeparator = styled.div`
    font-size: 14px;
    font-style: weigth;
    color: #999;
`

const DefaultStopwatch = styled.div`
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
        const { ScoreContainer, Stopwatch, Separator } = this.props

        if (this.state.error) {
            return <ErrorMessage message={error.message}></ErrorMessage>
        } else if (!isLoaded) {
            return <Loading></Loading>
        } else {
            return (
                <ScoreContainer>
                    <TeamScore side={'HOME'} team={teamHome} score={scoreHome}></TeamScore>
                    <Separator>X</Separator>
                    <Stopwatch className="stopwatch">{parseMatchPeriod(currentPeriod)}</Stopwatch>
                    <TeamScore side={'VISITORS'} team={teamVisitors} score={scoreVisitors} reverse={true}></TeamScore>
                </ScoreContainer>
            )
        }
    }
}

ScoreBoard.propTypes = {
    ScoreContainer: PropTypes.elementType,
    Stopwatch: PropTypes.elementType,
    Separator: PropTypes.elementType,
}

ScoreBoard.defaultProps = {
    ScoreContainer: DefaultScoreContainer,
    Stopwatch: DefaultStopwatch,
    Separator: DefaultSeparator,
}

export default ScoreBoard
