import logo from '../../../../public/logo_taxi.png'
type props = {
    plate: string
}
export default function DriverPlate ({plate}:props) {

    return <article className="driver-plate">
        <img src={logo} alt=""/>
        <span>{plate}</span>
        <span>Unidad</span>
    </article>
}