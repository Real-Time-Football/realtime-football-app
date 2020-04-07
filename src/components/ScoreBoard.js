import React from 'react'
import GoalButton from './GoalButton'
import TeamScore from './TeamScore'

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
                <article>
                    <TeamScore side={'HOME'} team={'Home'} score={this.state.scoreHome}></TeamScore>
                    <TeamScore side={'VISITORS'} team={'Visitors'} score={this.state.scoreVisitors}></TeamScore>
                </article>
                <article>
                    <GoalButton onClick={this.handleGoalHomeClick}>Goal Home</GoalButton>
                    <GoalButton onClick={this.handleGoalVisitorsClick}>Goal Visitors</GoalButton>
                </article>
            </section>
        )
    }
}

export default ScoreBoard
