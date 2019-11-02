import React from 'react'
import PropTypes from 'prop-types'

const Card = ({ from, wish, singleMessage = false }) => {
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
  const className = `card z-depth-0 small ${randomColour} darken-1`

  const showWish = () => {
    if (singleMessage || wish.length < 300) {
      return <p>{wish}</p>
    } else {
      return <p>{wish.substring(0, 300)} .....</p>
    }
  }

  return (
    <div className={className}>
      <div className="card-content white-text">
        <span className="card-title">From {from}</span>
        {showWish()}
      </div>
    </div>
  )
}

Card.propTypes = {
  from: PropTypes.string,
  wish: PropTypes.string,
  singleMessage: PropTypes.bool
}

export default Card
