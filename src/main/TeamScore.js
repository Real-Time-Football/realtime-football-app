import React from 'react'
import PropTypes from 'prop-types'

const TeamFlag = ({ teamName }) => (
    <div>
        <div>{teamName}</div>
        <div></div>
    </div>
)

TeamFlag.propTypes = {
    teamName: PropTypes.string.isRequired,
}

export default TeamFlag
