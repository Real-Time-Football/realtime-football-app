import React from 'react'
import PropTypes from 'prop-types'

const TeamFlag = ({ teamDescription, score, ...rest }) => (
    <div {...rest}>
        <div>{teamDescription}</div>
        <div>{score}</div>
    </div>
)

TeamFlag.propTypes = {
    teamDescription: PropTypes.string.isRequired,
    score: PropTypes.number,
}

export default TeamFlag
