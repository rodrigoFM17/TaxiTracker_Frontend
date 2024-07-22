import { useEffect, useRef, useState } from "react"
import { Map, tileLayer, marker, icon } from 'leaflet'
import './KitLocation.css'
import arrow from '../../../public/arrow-left-solid.svg'
import logo from '../../../public/logo_taxi.png'


const taxiImage = '../../../public/taxi.png'
const shadow = '../../../public/sombra.png'

const taxiIcon = icon({
  iconUrl: taxiImage,
  shadowUrl: shadow,
  iconSize:     [35, 30], // size of the icon
  shadowSize:   [35, 30], // size of the shadow
  iconAnchor:   [35, 30], // point of the icon which will correspond to marker's location
  shadowAnchor: [35, 30],  // the same for the shadow
  popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
})

export default function KitLocation () {

  const [map, setMap] = useState<Map>()
  const mapInit = useRef<boolean>(false)

  useEffect(() => {
    
    if(!mapInit.current){
      mapInit.current = true
      setMap(
        new Map('map',{
          center: [16.7548, -93.1074],
          zoom:14,
          minZoom: 13,
        }).setView([16.7548, -93.1074])
      )
    }
    if(map){
      tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      }).addTo(map)

      const kitMarker = marker([16.7548, -93.1074], {icon: taxiIcon}).addTo(map);

      setTimeout(() => {
        kitMarker.setLatLng([16.7558, -93.1084])
      }, 5000)

    }

  },[mapInit, map])


  return (
    <>
      <header className="map-header">
        <input type="image" src={arrow} alt="regresar" onClick={() => history.back()}/>
        <img src={logo} alt="logo TaxiTracker" />
      </header>
      <div id='map'>
      </div>


    </>
  )
}