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

export default function DriverStats () {

    const name = "Emanuel Lucas Morales"

    return <section className='driver-stats'>
        <LogoHeader title='conductor'/>

        <h2>{name}</h2>

        <DriverImage name={"Emmanuel"} imageUrl={"https://media.istockphoto.com/id/805012064/es/foto/retrato-de-hombre-hispano-maduro.jpg?s=612x612&w=0&k=20&c=Attj_f3-u7FnCZT_-VQxhowhdMrgToyfG3hd19BiIlY="} />
        <DriverGrade grade={0.84}/>
        <RadarChart name={name} />
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