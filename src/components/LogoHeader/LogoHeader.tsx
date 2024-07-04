import './LogoHeader.css'
import logo from '../../../public/logo_taxi.png'
import arrow from '../../../public/arrow-left-solid.svg'

export default function LogoHeader ({title}: {title: string}){

    return <header className="logo-header">
        <div>
            <input type="image" src={arrow} onClick={() => history.back()}/>
            <img src={logo} alt="logo Taxi Tracker" />
        </div>
        <h1>{title}</h1>
    </header>
}