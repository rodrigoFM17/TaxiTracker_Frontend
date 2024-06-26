import './KitCard.css'
import gpsMarker from '../../../public/location-dot-solid.svg'
import charts from '../../../public/chart-simple-solid.svg'
import configure from '../../../public/gears-solid.svg'
import Driver from '../Driver'

export default function KitCard () {

    return <>
        <figure className="kit-card">
            <h3>Kit 1</h3>
            <div>
                <button id='gps-button'>
                    <img src={gpsMarker} alt="punto gps" />
                </button>
                <button id='driver-button'>
                    <Driver color='black' className='container-images' />
                </button>
                <button id='chart-button'>
                    <img src={charts} alt="graficas" />
                </button>
                <button id='configure-button'>
                    <img src={configure} alt="configuracion" />
                </button>
            </div>
            

        </figure>
    </>
}