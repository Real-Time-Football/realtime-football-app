import React from 'react'
import GoalButton from './GoalButton'
import TeamScore from './TeamScore'
import styled from 'styled-components'

const ScoreContainer = styled.article`
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: Arial, Helvetica, sans-serif;
    padding: 30px 0;
`

class ScoreBoard extends React.PureComponent {
    state = {
        scoreHome: 0,
        scoreVisitors: 0,
    }

    handleGoalHomeClick = () => {
        this.setState(({ scoreHome }) => ({ scoreHome: scoreHome + 1 }))
    }

    handleGoalVisitorsClick = () => {
        this.setState(({ scoreVisitors }) => ({
            scoreVisitors: scoreVisitors + 1,
        }))
    }

    render() {
        return (
            <section>
                <ScoreContainer>
                    <TeamScore side={'HOME'} team={'São Paulo'} score={this.state.scoreHome}></TeamScore>
                    <div>x</div>
                    <TeamScore
                        side={'VISITORS'}
                        team={'Santos'}
                        score={this.state.scoreVisitors}
                        reverse={true}
                    ></TeamScore>
                </ScoreContainer>
                <article>
                    <GoalButton onClick={this.handleGoalHomeClick}>Goal Home</GoalButton>
                    <GoalButton onClick={this.handleGoalVisitorsClick}>Goal Visitors</GoalButton>
                </article>
            </section>
        )
    }
}

export default ScoreBoard
