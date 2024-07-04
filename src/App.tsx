import { useEffect, useRef, useState } from 'react'
import './App.css'
import { Route, Router } from 'wouter'
import Login from './pages/Login/Login'
import Home from './pages/Home/Home'
import Drivers from './pages/Drivers/Drivers'
import DriverStats from './pages/DriversStats/DriversStats'
import KitLocation from './pages/KitLocation/KitLocation'
import UserValoration from './pages/UserValoration/UserValoration'

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
        component={KitLocation}
        path={"/kit/:kitId/localizacion"}
        />
        <Route
        component={Home}
        path={'/'}
        />
        <Route
        component={Drivers}
        path={'/kit/:kitId/conductores'}
        />
        <Route
        component={DriverStats}
        path={'/kit/:kitId/conductores/:id/estadisticas'}
        />
        <Route
        component={UserValoration}
        path={'/kit/:kitId/valoracion'}
        />
      </Router>
    </>
  )
}

export default App
