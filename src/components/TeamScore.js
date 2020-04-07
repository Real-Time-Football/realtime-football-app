import React from 'react'
import PropTypes from 'prop-types'

const TeamScore = ({ team, score = 0, side }) => (
    <article data-side={side}>
        <header>{team}</header>
        <aside></aside>
        <div>{score}</div>
    </article>
)

TeamScore.propTypes = {
    team: PropTypes.string.isRequired,
    score: PropTypes.number,
    side: PropTypes.string.isRequired,
}

export default TeamScore
