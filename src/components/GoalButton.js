import React from 'react'
import PropTypes from 'prop-types'

const GoalButton = props => <button {...props} />

GoalButton.propTypes = {
    children: PropTypes.node.isRequired,
}

export default GoalButton
