import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Parallax from './components/layout/Parallax'
import Navbar from './components/layout/Navbar'
import MessageList from './components/message/MessageList'
import Footer from './components/layout/Footer'

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <main></main>
        <Switch>
          <Route exact path="/" component={Parallax} />
          <Route exact path="/messages" component={MessageList} />
        </Switch>
      </div>
      <Footer />
    </BrowserRouter>
  )
}

export default App
