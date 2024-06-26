import KitCard from '../../components/KitCard/KitCard'
import SectionContainer from '../../components/SectionContainer/SectionContainer'
import './Home.css'

export default function Home() {

    return <>
        <SectionContainer>
            <h1>Bienvenide Diego</h1>
            {/* hacer el consumo de la api en el recurso de los kits */}
            <KitCard/>
        </SectionContainer>
    </>
}