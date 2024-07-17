import Driver from '../Driver'
import './InputImageFile.css'

type props = {
    id: string,
    imageUrl:string
}

export default function InputImageFile ({id, imageUrl}:props) {

    return <>
    <input type='file' accept='image/*' name='image' className='input-image' id={id}/>
    <label htmlFor={id}>
        {
            imageUrl ?
            <img src={imageUrl} alt="imagen del conductor" />
            :
            <Driver color='#292929' className='' />
        }

        <span className='hover-message'>
            establecer foto
        </span>
        
    </label>
    </>
}