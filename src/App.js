import React from 'react'
import NavBar from './NavBar'
import About from './About'
import Home from './Home'
import Login from './Login'
import {Switch, Route} from 'react-router-dom'

function App() {
  return (
    <div>
           <NavBar />
        <Switch>
          <Route path="/about">
          <About />
          </Route>
          <Route path="/login" >
          <Login />
          </Route>
          <Route path="/" >
          <Home />
          </Route>
        </Switch>
    </div>
  )
}

export default App