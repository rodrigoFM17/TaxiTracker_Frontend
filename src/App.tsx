import { useEffect, useRef, useState } from 'react'
import './App.css'
import { Route, Router } from 'wouter'
import Login from './pages/Login/Login'
import Home from './pages/Home/Home'
import Drivers from './pages/Drivers/Drivers'
import DriverStats from './pages/DriversStats/DriversStats'
import KitLocation from './pages/KitLocation/KitLocation'
import UserValoration from './pages/UserValoration/UserValoration'
import KitConfiguration from './pages/KitConfiguration/KitConfiguration'

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
        <Route
        component={KitConfiguration}
        path={'/kit/:kitId/configuracion'}
        />
      </Router>
    </>
  )
}

export default App
