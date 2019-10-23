import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import Layout from './components/layout/Layout'
import Carousel from './components/layout/Carousel'

const App = () => {
  return (
    <BrowserRouter>
      <Layout />
      <Carousel />
    </BrowserRouter>
  )
}

export default App
