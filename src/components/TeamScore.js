import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const TeamLogo = styled.img`
    height: 60px;
    width: 60px;
`

const TeamContainer = styled.article`
    display: flex;
    flex-direction: ${props => (props.reverse ? 'row-reverse' : 'row')};
    align-items: center;
`

const TeamName = styled.header`
    font-size: 20px;
    margin: ${props => (props.reverse ? '0 0 0 20px' : '0 20px 0 0')};
`

const Score = styled.div`
    font-size: 38px;
    margin: ${props => (props.reverse ? '0 40px 0 10px' : '0 10px 0 40px')};
`

const TeamScore = ({ team, score = 0, side }) => (
    <TeamContainer data-side={side} reverse={side === 'VISITORS'}>
        <TeamName reverse={side === 'VISITORS'}>
            <h1>{team}</h1>
        </TeamName>
        <aside>
            <TeamLogo className="team-logo" src={'src/assets/images/logo-sao-paulo-256.png'} />
        </aside>
        <Score reverse={side === 'VISITORS'}>
            <strong>{score}</strong>
        </Score>
    </TeamContainer>
)

TeamScore.propTypes = {
    team: PropTypes.string.isRequired,
    score: PropTypes.number,
    side: PropTypes.string.isRequired,
    Logo: PropTypes.elementType,
}

export default TeamScore
