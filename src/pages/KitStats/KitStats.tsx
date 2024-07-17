import LogoHeader from '../../components/LogoHeader/LogoHeader'
import CalifChart from './components/CalifChart'
import DistanceChart from './components/DistanceChart'
import DurationChart from './components/DurationChart'
import IdleTime from './components/IdleTime'
import QuadrantChart from './components/QuadrantChart'
import WeekChart from './components/WeekChart'
import './KitStats.css'

export default function KitStats () {

    const kit = "Kit 1"

    return <section className='driver-stats'>
        <LogoHeader title='Estadísticas'/>
        <h2 className='kit-title'>{kit}</h2>
        <DurationChart />
        <WeekChart />
        <DistanceChart />
        <CalifChart />
        <QuadrantChart />
        <IdleTime />
    </section>
}