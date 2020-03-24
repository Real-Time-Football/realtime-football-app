import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const DefaultButton = styled.button`
    background-color: #4caf50;
    border: none;
    color: white;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin: 4px 2px;
`

const GoalButton = ({ Button, ...props }) => <Button {...props} />

GoalButton.propTypes = {
    children: PropTypes.node.isRequired,
    Button: PropTypes.elementType,
}

GoalButton.defaultProps = {
    Button: DefaultButton,
}

export default GoalButton
