import React, { useEffect } from 'react'
import M from 'materialize-css'
import { Link } from 'react-router-dom'

const Carousel = () => {
  useEffect(() => {
    M.AutoInit()
  }, [])

  return (
    <div className="carousel">
      <Link to="#" className="carousel-item">
        <img src="https://lorempixel.com/250/250/nature/1" alt="" />
      </Link>
      <Link to="#" className="carousel-item">
        <img src="https://lorempixel.com/250/250/nature/2" alt=""/>
      </Link>
      <Link to="#" className="carousel-item">
        <img src="https://lorempixel.com/250/250/nature/3" alt=""/>
      </Link>
      <Link to="#" className="carousel-item">
        <img src="https://lorempixel.com/250/250/nature/4" alt=""/>
      </Link>
      <Link to="#" className="carousel-item">
        <img src="https://lorempixel.com/250/250/nature/5" alt=""/>
      </Link>
    </div>
  )
}

export default Carousel
