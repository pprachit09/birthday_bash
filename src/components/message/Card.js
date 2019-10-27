import React from 'react'

const Card = () => {
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
        <span className="card-title">From Prachit</span>
        <p>
          I am a very simple card. I am good at containing small bits of
          information. I am convenient because I require little markup to use
          effectively.
        </p>
      </div>
    </div>
  )
}

export default Card
