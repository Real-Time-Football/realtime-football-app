import React from 'react'
import ReactDOM from 'react-dom'
import ScoreBoard from '../components/ScoreBoard'

const container = document.createElement('div')
document.body.appendChild(container)
ReactDOM.render(<ScoreBoard></ScoreBoard>, container)
