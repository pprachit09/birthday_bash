import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Parallax from './components/layout/Parallax'
import Navbar from './components/layout/Navbar'
import MessageList from './components/message/MessageList'

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Parallax} />
          <Route exact path="/messages" component={MessageList} />
        </Switch>
      </div>
    </BrowserRouter>
  )
}

export default App
