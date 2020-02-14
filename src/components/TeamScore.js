import React from 'react'
import PropTypes from 'prop-types'

const TeamScore = ({ teamDescription, score = 0, ...rest }) => (
    <div {...rest}>
        <div>{teamDescription}</div>
        <div>{score}</div>
    </div>
)

TeamScore.propTypes = {
    teamDescription: PropTypes.string.isRequired,
    score: PropTypes.number,
}

export default TeamScore
