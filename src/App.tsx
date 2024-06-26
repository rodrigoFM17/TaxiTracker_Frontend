import { useEffect, useRef, useState } from 'react'
import './App.css'
import { Route, Router } from 'wouter'
import Login from './pages/Login/Login'
import Home from './pages/Home/Home'

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
      </Router>
    </>
  )
}

export default App
