import React from 'react'
import { storiesOf } from '@storybook/react'
import ErrorMessage from '../src/components/ErrorMessage'

storiesOf('ErrorMessage', module).add('withError', () => <ErrorMessage message="Content Not Found"></ErrorMessage>)
