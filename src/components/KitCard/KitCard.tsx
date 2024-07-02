import './KitCard.css'
import gpsMarker from '../../../public/location-dot-solid.svg'
import charts from '../../../public/chart-simple-solid.svg'
import configure from '../../../public/gears-solid.svg'
import Driver from '../Driver'
import Chart from '../Chart'
import Gears from '../Gears'
import GPSMarker from '../GPSMarker'
import { navigate } from 'wouter/use-browser-location'

export default function KitCard () {

    return <>
        <article className="kit-card">
            <h3>Kit 1</h3>
            <div>
                <button id='gps-button' onClick={() => navigate('/gps/kitId')}>
                    <GPSMarker color='#F7B731' className='container-images' />
                </button>
                <button id='driver-button' onClick={() => navigate('/conductores')}>
                    <Driver color='#31250A' className='container-images' />
                </button>
                <button id='chart-button' onClick={() => navigate('/estadisticas/kitId')}>
                    <Chart color='#634914' className='container-images' />
                </button>
                <button id='configure-button' onClick={() => navigate('/configuracion/kitId')}>
                    <Gears color='#FDF1D6' className='container-images'/>
                </button>
            </div>
            

        </article>
    </>
}