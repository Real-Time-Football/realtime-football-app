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
            <div>
                <div>
                    <p>hello </p>
                    <TeamScore
                        data-team-type={'home'}
                        teamDescription={'Home'}
                        score={this.state.scoreHome}
                    ></TeamScore>
                    <TeamScore
                        data-team-type={'visitors'}
                        teamDescription={'Visitors'}
                        score={this.state.scoreVisitors}
                    ></TeamScore>
                </div>
                <div>
                    <GoalButton data-team-type={'home'} onClick={this.handleGoalHomeClick}>
                        Goal Home
                    </GoalButton>
                    <GoalButton data-team-type={'visitors'} onClick={this.handleGoalVisitorsClick}>
                        Goal Visitors
                    </GoalButton>
                </div>
            </div>
        )
    }
}

export default ScoreBoard
