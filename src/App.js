import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Parallax from './components/layout/Parallax'
import Navbar from './components/layout/Navbar'
import MessageList from './components/message/MessageList'
import AddWish from './components/message/AddWish'
import SingleMessage from './components/message/SingleMessage'

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <main>
          <Switch>
            <Route exact path="/" component={Parallax} />
            <Route exact path="/message/:id" component={SingleMessage} />
            <Route exact path="/messages" component={MessageList} />
            <Route exact path="/wish" component={AddWish} />
          </Switch>
        </main>
      </div>
    </BrowserRouter>
  )
}

export default App
