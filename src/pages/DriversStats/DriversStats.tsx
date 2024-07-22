import DriverImage from '../../components/DriverImage/DriverImage'
import LogoHeader from '../../components/LogoHeader/LogoHeader'
import './DriverStats.css'
import CardInfo from './components/CardInfo'
import DriverGrade from './components/DriverGrade'
import DriverPlate from './components/DriverPlate'
import RadarChart from './components/RadarChart'
import car from '../../../public/car-side-solid.svg'
import crash from '../../../public/car-burst-solid.svg'
import star from '../../../public/star-solid.svg'
import { useParams } from 'wouter'
import { useEffect, useState } from 'react'
import { getDriverStatsById } from '../../services/Driver'
import { Driver } from '../../models/Driver/Driver'

export default function DriverStats () {

    const [driver, setDriver] = useState<Driver>({
        image: "",
        lastName: "",
        name: "",
        pin: "",
    })
    const {driverId} = useParams()

    useEffect(()=> {
        const fetchData = async () => {
            if(driverId){
                const response = await getDriverStatsById(driverId)
                if(response.data && Array.isArray(response.data))
                setDriver(response.data[0])
            }
        }
        fetchData()
    },[])

    return <section className='driver-stats'>
        <LogoHeader title='conductor'/>

        <h2>{driver.name + " " + driver.lastName}</h2>

        <DriverImage name={driver.name} imageUrl={driver.image} />
        <DriverGrade grade={0.84}/>
        <RadarChart name={driver.name + " " + driver.lastName} />
        <DriverPlate plate={"KY-031"} />
        <CardInfo 
        value={25} 
        imgSrc={car} 
        infoLabel='viajes por dia'
        className='travels-per-day'
        />
        <CardInfo 
        value={13} 
        imgSrc={crash} 
        infoLabel='choques totales'
        className='crashes'
        />
        <CardInfo 
        value={4.1} 
        imgSrc={star} 
        infoLabel='valoracion de los usuario'
        className='stars'
        />
    </section>
}