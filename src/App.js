import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Parallax from './components/layout/Parallax'
import Navbar from './components/layout/Navbar'

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Parallax} />
        </Switch>
      </div>
    </BrowserRouter>
  )
}

export default App
