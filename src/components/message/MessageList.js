import React from 'react'
import Card from './Card'

const MessageList = () => {
  return (
    <div className="row">
      <div className="container">
        <div className="col m3 s6">
          <Card />
        </div>
        <div className="col m3 s6">
          <Card />
        </div>
        <div className="col m3 s6">
          <Card />
        </div>
        <div className="col m3 s6">
          <Card />
        </div>
      </div>
    </div>
  )
}

export default MessageList
