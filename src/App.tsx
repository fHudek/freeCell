import React from 'react'
import logo from './logo.svg'
import './App.css'
import { StartPage } from './pages/Start'
import { GamePage } from './pages/Game'
import { EndPage } from './pages/End'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import * as route from './routes'

// TODO maybe add lazy loading of scripts for pages

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path={route.START}>
          <StartPage />
        </Route>
        <Route path={route.GAME}>
          <GamePage />
        </Route>
        <Route path={route.END}>
          <EndPage />
        </Route>
      </Switch>
    </Router>
  )
}

export default App
