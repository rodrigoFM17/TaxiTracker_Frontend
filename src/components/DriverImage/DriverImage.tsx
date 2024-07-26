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
        <div className="container-driver-image">
            <img src={imageUrl} alt={`imagen de perfil de ${name}`} className="driver-image" />
        </div>
        : 
        <Driver color='#FDF1D6' className='default-image' /> 
    }
    </>
}