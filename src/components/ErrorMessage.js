import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const DefaultErrorContainer = styled.div`
    font-family: Arial, Helvetica, sans-serif;
    color: #721c24;
    background-color: #f8d7da;
    position: relative;
    padding: 15px 20px;
    margin-bottom: 10px;
    border: 1px solid #f5c6cb;
    border-radius: 5px;
`
const ErrorMessage = ({ message, ErrorContainer }) => (
    <ErrorContainer>
        <strong>Error:</strong> {message}
    </ErrorContainer>
)

ErrorMessage.propTypes = {
    ErrorContainer: PropTypes.elementType,
    message: PropTypes.string.isRequired,
}

ErrorMessage.defaultProps = {
    ErrorContainer: DefaultErrorContainer,
}

export default ErrorMessage
