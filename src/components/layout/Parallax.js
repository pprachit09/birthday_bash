import React from 'react'
import Carousel from './Carousel'

const Parallax = () => {
  return (
    <div>
      <div className="parallax-container">
        <div className="parallax">
          <img src="/0_0Z5aWuFzUz7kAuwp.jpeg" alt="" />
        </div>
      </div>
      <Carousel />
      <div className="parallax-container">
        <div className="parallax">
          <img src="/0_0Z5aWuFzUz7kAuwp.jpeg" alt="" />
        </div>
      </div>
    </div>
  )
}

export default Parallax
