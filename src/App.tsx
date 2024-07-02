import { useEffect, useRef, useState } from 'react'
import './App.css'
import { Route, Router } from 'wouter'
import Login from './pages/Login/Login'
import Home from './pages/Home/Home'
import Drivers from './pages/Drivers/Drivers'
import DriverStats from './pages/DriversStats/DriversStats'

function App() {

  useEffect(() => {

  },[])


  return (
    <>
      <Router >
        <Route
        component={Login} 
        path={'/login'}
        />
        <Route
        component={Home}
        path={'/'}
        />
        <Route
        component={Drivers}
        path={'/conductores'}
        />
        <Route
        component={DriverStats}
        path={'/conductores/:id/estadisticas'}
        />
      </Router>
    </>
  )
}

export default App
