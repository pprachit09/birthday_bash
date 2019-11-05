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
        <img src="/IMG-20191015-WA0004.jpg" className="responsive-img" alt="" />
      </Link>
      <Link to="#" className="carousel-item">
        <img src="/IMG-20191015-WA0005.jpg" className="responsive-img" alt="" />
      </Link>
      <Link to="#" className="carousel-item">
        <img src="/IMG-20191015-WA0002.jpg" className="responsive-img" alt="" />
      </Link>
      <Link to="#" className="carousel-item">
        <img src="/IMG-20191015-WA0000.jpg" className="responsive-img" alt="" />
      </Link>
      <Link to="#" className="carousel-item">
        <img src="/IMG-20191004-WA0024.jpg" className="responsive-img" alt="" />
      </Link>
      <Link to="#" className="carousel-item">
        <img src="/IMG-20191103-WA0010.jpg" className="responsive-img" alt="" />
      </Link>
      <Link to="#" className="carousel-item">
        <img src="/IMG-20191103-WA0009.jpg" className="responsive-img" alt="" />
      </Link>
      <Link to="#" className="carousel-item">
        <img src="/IMG-20191103-WA0007.jpg" className="responsive-img" alt="" />
      </Link>
      <Link to="#" className="carousel-item">
        <img src="/IMG-20191103-WA0005.jpg" className="responsive-img" alt="" />
      </Link>
      <Link to="#" className="carousel-item">
        <img src="/IMG-20191105-WA0000.jpg" className="responsive-img" alt="" />
      </Link>
      <Link to="#" className="carousel-item">
        <img src="/IMG-20191103-WA0004.jpg" className="responsive-img" alt="" />
      </Link>
      <Link to="#" className="carousel-item">
        <img src="/IMG-20191103-WA0013.jpg" className="responsive-img" alt="" />
      </Link>
      <Link to="#" className="carousel-item">
        <img src="/IMG-20191103-WA0012.jpg" className="responsive-img" alt="" />
      </Link>
    </div>
  )
}

export default Carousel
