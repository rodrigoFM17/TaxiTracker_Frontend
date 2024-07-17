import './KitCard.css'
import Driver from '../Driver'
import Chart from '../Chart'
import Gears from '../Gears'
import GPSMarker from '../GPSMarker'
import { navigate } from 'wouter/use-browser-location'
import { Kit } from '../../models/Kit/Kit'

export default function KitCard ({name, unity, userId, id}:Kit) {

    return <>
        <article className="kit-card">
            <h3>{name} - {unity}</h3>
            <div>
                <button id='gps-button' onClick={() => navigate(`/kit/${id}/localizacion`)} title='ubicacion en tiempo real'>
                    <GPSMarker color='#F7B731' className='container-images' />
                </button>
                <button id='driver-button' onClick={() => navigate(`/kit/${id}/conductores`)} title='conductores'>
                    <Driver color='#31250A' className='container-images' />
                </button>
                <button id='chart-button' onClick={() => navigate(`/kit/${id}/estadisticas`)} title='estadisticas del kit'>
                    <Chart color='#634914' className='container-images' />
                </button>
                <button id='configure-button' onClick={() => navigate(`/kit/${id}/configuracion`)} title='configurar kit'>
                    <Gears color='#FDF1D6' className='container-images'/>
                </button>
            </div>
        </article>
    </>
}