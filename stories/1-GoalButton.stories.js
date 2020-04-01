import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import GoalButton from '../src/components/GoalButton'

storiesOf('GoalButton', module).add('default', () => (
    <GoalButton data-team-type={'home'} onClick={action('handleGoalHomeClick')}>
        Goal Button
    </GoalButton>
))
