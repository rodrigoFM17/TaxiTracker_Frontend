import Driver from "../Driver";
import './DriverImage.css'

type props = {
    imageUrl: string,
    name: string
}

export default function DriverImage ({imageUrl, name}: props) {
    return <>
    {
        imageUrl ?
        <img src={imageUrl} alt={`imagen de perfil de ${name}`} className="driver-image" />
        : 
        <Driver color='#FDF1D6' className='default-image' /> 
    }
    </>
}