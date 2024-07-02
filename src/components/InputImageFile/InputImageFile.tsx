import Driver from '../Driver'
import './InputImageFile.css'

type props = {
    id: string,
    imageUrl:string
}

export default function InputImageFile ({id, imageUrl}:props) {

    return <>
    <input type='file' accept='image/*' className='input-image' id={id}>
    </input>
    <label htmlFor={id}>
        {
            imageUrl ?
            <img src={imageUrl} alt="imagen del conductor" />
            :
            <Driver color='#F9C55A' className='' />
        }

        <span className='hover-message'>
            establecer foto
        </span>
        
    </label>
    </>
}