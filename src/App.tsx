import React from 'react'
import './App.css'
import { WelcomePage } from './pages/Welcome'
import { PlayPage } from './pages/Play'
import { EndPage } from './pages/End'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import * as route from './routes'

// TODO maybe add lazy loading of scripts for pages

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path={route.WELCOME}>
          <WelcomePage />
        </Route>
        <Route path={route.PLAY}>
          <PlayPage />
        </Route>
        <Route path={route.END}>
          <EndPage />
        </Route>
      </Switch>
    </Router>
  )
}

export default App
