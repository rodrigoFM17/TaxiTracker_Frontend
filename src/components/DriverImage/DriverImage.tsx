import Driver from "../Driver";

export default function DriverImage ({imageUrl, name}) {
    return <>
    {
        imageUrl ?
        <img src={imageUrl} alt={`imagen de perfil de ${name}`} />
        : 
        <Driver color='#FDF1D6' className='default-image' /> 
    }
    </>
}