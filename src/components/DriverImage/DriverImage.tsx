import Driver from "../Driver";
import './DriverImage.css'

export default function DriverImage ({imageUrl, name}) {
    return <>
    {
        imageUrl ?
        <img src={imageUrl} alt={`imagen de perfil de ${name}`} className="driver-image" />
        : 
        <Driver color='#FDF1D6' className='default-image' /> 
    }
    </>
}