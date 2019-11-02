import React from 'react'
import PropTypes from 'prop-types'

const Card = ({ from, wish }) => {
  const colours = [
    'red',
    'pink',
    'orange',
    'blue',
    'green',
    'blue-grey',
    'teal',
    'purple',
    'amber'
  ]
  const randomColour = colours[Math.floor(Math.random() * 9)]
  const className = `card small ${randomColour} darken-1`

  return (
    <div className={className}>
      <div className="card-content white-text">
        <span className="card-title">From {from}</span>
        <p>{wish}</p>
      </div>
    </div>
  )
}

Card.propTypes = {
  from: PropTypes.string,
  wish: PropTypes.string
}

export default Card
