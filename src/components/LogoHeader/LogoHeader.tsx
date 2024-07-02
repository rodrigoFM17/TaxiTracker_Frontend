import './LogoHeader.css'
import logo from '../../../public/logo_taxi.png'

export default function LogoHeader ({title}: {title: string}){

    return <header className="logo-header">
        <img src={logo} alt="logo Taxi Tracker" />
        <h1>{title}</h1>
    </header>
}