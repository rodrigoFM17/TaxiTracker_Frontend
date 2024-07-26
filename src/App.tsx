import { useEffect } from 'react'
import './App.css'
import { Route, Router } from 'wouter'
import Login from './pages/Login/Login'
import Home from './pages/Home/Home'
import Drivers from './pages/Drivers/Drivers'
import DriverStats from './pages/DriversStats/DriversStats'
import KitLocation from './pages/KitLocation/KitLocation'
import KitStats from './pages/KitStats/KitStats'
import UserValoration from './pages/UserValoration/UserValoration'
import KitConfiguration from './pages/KitConfiguration/KitConfiguration'
import AddDriver from './pages/AddDriver/AddDriver'
import { UserContextProvider } from './context/UserContext'
import EditDriver from './pages/EditDriver/EditDriver'
import ProtectedRoutes from './components/ProtectedRoutes/ProtectedRoutes'

function App() {

  useEffect(() => {

  },[])


  return (
    <>
      <UserContextProvider>
        <Router >
          <ProtectedRoutes>
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
            component={AddDriver}
            path={"/kit/:kitId/conductores/agregar"}
            />
            <Route
            component={EditDriver}
            path={"/kit/:kitId/conductores/:driverId/actualizar"}
            />
            <Route
            component={KitStats}
            path={"/kit/:kitId/estadisticas"}
            />
            <Route
            component={DriverStats}
            path={'/kit/:kitId/conductores/:driverId/estadisticas'}
            />
            <Route
            component={UserValoration}
            path={'/kit/:kitId/valoracion'}
            />
            <Route
            component={KitConfiguration}
            path={'/kit/:kitId/configuracion'}
            />
          </ProtectedRoutes>
        </Router>
      </UserContextProvider>
    </>
  )
}

export default App
