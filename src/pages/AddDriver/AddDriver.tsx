import { useParams } from "wouter";
import InputImageFile from "../../components/InputImageFile/InputImageFile";
import LogoHeader from "../../components/LogoHeader/LogoHeader";
import { createDriver } from "../../services/Driver";
import './AddDriver.css'
import { generatePin } from "./utils/generatePin";
import { FormEvent } from "react";

const fetchAddDriver = async(kitId: string, e: FormEvent) => {
    e.preventDefault()
    const image = document.querySelector("#driver-photo") as HTMLInputElement
    const name = document.querySelector("#name") as HTMLInputElement
    const lastName = document.querySelector("#lastName") as HTMLInputElement
    const pin = document.querySelector("#pin") as HTMLInputElement
    console.log(image.files)

    if(image.files){
        const newDriver = new FormData
        newDriver.append("kit_id", kitId)
        newDriver.append("name", name.value)
        newDriver.append("last_name", lastName.value)
        newDriver.append("pin", pin.value)
        newDriver.append("image", image.files[0])
        console.log(newDriver)

        const response = await createDriver(newDriver)
        console.log(response)
        if(response.status == 'success')
            history.back()
    }


}


export default function AddDriver () {

    const {kitId} = useParams()

    return <section className="add-driver">
        <LogoHeader title="agregar conductor" />

        <form className="form-add-user" onSubmit={(e) => fetchAddDriver(kitId ? kitId : "", e)} encType="multipart/form-data">
        <InputImageFile id="driver-photo" imageUrl="" />
        <input type="text" placeholder="Nombre(s)" id="name" required/>
        <input type="text" placeholder="Apellidos" id="lastName" required/>
        <div className="container-pin">
            <input 
            type="number" 
            placeholder="pin"
            minLength={4} 
            maxLength={4} 
            id="pin" 
            required
            />
            <button onClick={generatePin} type="button">
                Generar
            </button>
        </div>
        <span>puede agregar el pin manualmente o generarlo aleatoriamente</span>
        <div className="container-buttons">
            <button id="cancelar" onClick={() => {}} type="button">
                cancelar
            </button>
            <button type="submit">
                agregar
            </button>
        </div>
        </form>
    </section>
}