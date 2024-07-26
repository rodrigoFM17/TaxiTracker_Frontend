import { useState } from 'react'
import Driver from '../Driver'
import './InputImageFile.css'

type props = {
    id: string,
    imageUrl:string
}

export default function InputImageFile ({id, imageUrl}:props) {

    const [currentImage, setCurrentImage] = useState<string>("")

    return <>
    <input 
    type='file' 
    accept='image/*' 
    name='image' 
    className='input-image' 
    onInput={(e:any) => {
        setCurrentImage(URL.createObjectURL(e.target.files[0]))

    }}
    id={id}
    />
    <label htmlFor={id}>
        {
            currentImage ? 
            <img src={currentImage} alt="imagen del conductor" />
            : imageUrl ?
            <img src={imageUrl} alt="imagen del conductor" />
            :
            <Driver color='#292929' className='' />
        }

        <span className='hover-message'>
            {
                currentImage ? "cambiar seleccion"
                : imageUrl ? "cambiar foto" 
                : "establecer foto"
            }
        </span>
        
    </label>
    </>
}