import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { parseTeamLogo, parseTeamName } from './matchHelpers'

const DefaultTeamContainer = styled.article`
    display: flex;
    flex-direction: ${props => (props.reverse ? 'row-reverse' : 'row')};
    align-items: center;
`

const DefaultTeamLogo = styled.img`
    height: 60px;
    width: 60px;
`

const DefaultTeamName = styled.header`
    font-size: 20px;
    margin: ${props => (props.reverse ? '0 0 0 20px' : '0 20px 0 0')};
`

const DefualtScore = styled.div`
    font-size: 38px;
    margin: ${props => (props.reverse ? '0 40px 0 10px' : '0 10px 0 40px')};
`

const TeamScore = ({ TeamContainer, TeamName, TeamLogo, Score, team, score = 0, side }) => (
    <TeamContainer data-side={side} reverse={side === 'VISITORS'}>
        <TeamName reverse={side === 'VISITORS'}>
            <h1>{parseTeamName(team)}</h1>
        </TeamName>
        <aside>
            <TeamLogo className="team-logo" src={parseTeamLogo(team)} />
        </aside>
        <Score reverse={side === 'VISITORS'}>
            <strong>{score}</strong>
        </Score>
    </TeamContainer>
)

TeamScore.propTypes = {
    TeamContainer: PropTypes.elementType,
    TeamName: PropTypes.elementType,
    TeamLogo: PropTypes.elementType,
    Score: PropTypes.elementType,
    team: PropTypes.string.isRequired,
    score: PropTypes.number,
    side: PropTypes.string.isRequired,
    Logo: PropTypes.elementType,
}

TeamScore.defaultProps = {
    TeamContainer: DefaultTeamContainer,
    TeamName: DefaultTeamName,
    TeamLogo: DefaultTeamLogo,
    Score: DefualtScore,
}

export default TeamScore
