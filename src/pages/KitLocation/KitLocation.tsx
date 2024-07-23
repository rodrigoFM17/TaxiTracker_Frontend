import { useEffect, useRef, useState } from "react"
import { Map, tileLayer, marker, icon, Point, Marker } from 'leaflet'
import './KitLocation.css'
import arrow from '../../../public/arrow-left-solid.svg'
import logo from '../../../public/logo_taxi.png'
import { socket } from "../../services/socketio"
import { getDriverById } from "../../services/Driver"
import { Driver } from "../../models/Driver/Driver"
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
  const [isConnected, setIsConnected] = useState(socket.connected);
  const [driverId, setDriverId] = useState<string | null>(null)
  const [driver, setDriver] = useState<Driver | null>({
    image: "https://media.istockphoto.com/id/805012064/es/foto/retrato-de-hombre-hispano-maduro.jpg?s=612x612&w=0&k=20&c=Attj_f3-u7FnCZT_-VQxhowhdMrgToyfG3hd19BiIlY=",
    lastName: "Lucas Morales",
    name: "Emmanuel",
    pin: "2004"
  })
  const mapInit = useRef<boolean>(false)
  const kitMarker = useRef<Marker | null>(null)

  useEffect(() => {
    const fetchData = async () => {
      if(driverId){
        const response = await getDriverById(driverId)
        if(response.status == "success" && Array.isArray(response.data))
          setDriver(response.data[0])
      }
    }; fetchData()

  }, [driverId])

  useEffect(() => {
    function onConnect() {
      setIsConnected(true);
    }

    function onDisconnect() {
      setIsConnected(false);
    }

    function onRefreshLocation(data: any) {
      if(!kitMarker.current && map){
        kitMarker.current = marker([data.coordinates["latitude"], data.coordinates["longitude"]], {icon: taxiIcon}).addTo(map);
        if(!driver)
          setDriverId(data.driver_id)
      } else if (kitMarker.current && map) {
        kitMarker.current.setLatLng([data.coordinates["latitude"], data.coordinates["longitude"]])
      }
      
    }

    socket.on('connect', onConnect);
    socket.on('disconnect', onDisconnect);
    socket.on('refresh:kit_location', onRefreshLocation);

    return () => {
      socket.off('connect', onConnect);
      socket.off('disconnect', onDisconnect);
      socket.off('refresh:kit_location', onRefreshLocation);
    };
  }, []);

  useEffect(() => {

    if(!mapInit.current){
      mapInit.current = true
      setMap(
        new Map('map',{
          center: [16.7548, -93.1074],
          zoom:14,
          maxZoom: 19,
          minZoom: 13,
        }).setView([16.7548, -93.1074])
      )
    }

    if(map){
      tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      }).addTo(map)

      // const kitMarker = marker([16.7548, -93.1074], {icon: taxiIcon}).addTo(map);

      // setTimeout(() => {
      //   kitMarker.setLatLng([16.7558, -93.1084])
      // }, 5000)
    }

  },[mapInit, map])


  return (
    <>
      <header className="map-header">
        <input type="image" src={arrow} alt="regresar" onClick={() => history.back()}/>
        <img src={logo} alt="logo TaxiTracker" />
      </header>
      {
        (isConnected && driver) && <figure className="currentDriver">
          <img src={driver.image} alt={`imagen de ${driver.name} ${driver.lastName}`} />
          <span>{driver.name} {driver.lastName}</span>
        </figure>
      }
      <div id='map'>
      </div>


    </>
  )
}