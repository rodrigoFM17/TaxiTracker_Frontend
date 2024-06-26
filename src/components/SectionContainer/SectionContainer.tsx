import './SectionContainer.css'
import logo from '../../../public/logo_taxi.png'

export default function SectionContainer ({children}: any){

    return <section className="section-container">
        <img src={logo} alt="logo Taxi Tracker" />
        {children}
    </section>
}