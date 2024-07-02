import KitCard from '../../components/KitCard/KitCard'
import LogoHeader from '../../components/LogoHeader/LogoHeader'
import './Home.css'

export default function Home() {

    return <>
        <LogoHeader title='Bienvenide Diegue'/>
        <section className='home'>
            <KitCard/>
            <KitCard/>
        </section>
        {/* hacer el consumo de la api en el recurso de los kits */}
        
    </>
}