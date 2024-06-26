import { useEffect, useRef, useState } from "react"
import { Map, tileLayer } from 'leaflet'


export default function KitLocation () {

  const [map, setMap] = useState<Map>()
  const mapInit = useRef<boolean>(false)

  useEffect(() => {
    
    if(!mapInit.current){
      mapInit.current = true
      setMap(
        new Map('map',{
          center: [-33.8670, 151.21],
          zoom:15,
        }).setView([-33.8670, 151.21])
      )
    }
    if(map){
      tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      }).addTo(map)
    }

  },[mapInit, map])


  return (
    <>
      <div id='map'>

      </div>
    </>
  )
}