import React from 'react'
import Carousel from './Carousel'
import { Link } from 'react-router-dom'

const Parallax = () => {
  return (
    <div>
      <div className="parallax-container">
        <div className="parallax">
          <img src="/0_0Z5aWuFzUz7kAuwp.jpeg" alt="" />
        </div>
      </div>
      <div className="container">
        <Carousel />
        <h5 className="center-align">
          <Link to="/messages" className="pink-text text-lighten-1">
            check out your birthday messages
          </Link>
        </h5>
      </div>
      <div className="parallax-container">
        <div className="parallax">
          <img src="/0_0Z5aWuFzUz7kAuwp.jpeg" alt="" />
        </div>
      </div>
    </div>
  )
}

export default Parallax
