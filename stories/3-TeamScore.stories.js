import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs, number, text } from '@storybook/addon-knobs'
import TeamScore from '../src/components/TeamScore'

const stories = storiesOf('TeamScore', module)

stories.addDecorator(withKnobs)

stories.add('default', () => (
    <TeamScore side={text('side', 'HOME')} team={text('team', 'PALMEIRAS')} score={number('score', 5)}></TeamScore>
))
