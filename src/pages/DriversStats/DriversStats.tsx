import DriverImage from '../../components/DriverImage/DriverImage'
import LogoHeader from '../../components/LogoHeader/LogoHeader'
import './DriverStats.css'
import DriverGrade from './components/DriverGrade'
import RadarChart from './components/RadarChart'

export default function DriverStats () {

    const name = "Emanuel Lucas Morales"

    return <section className='driver-stats'>
        <LogoHeader title='conductor'/>

        <h2>{name}</h2>

        <DriverImage />
        <RadarChart name={name} />
        <DriverGrade grade={0.84}/>
    </section>
}