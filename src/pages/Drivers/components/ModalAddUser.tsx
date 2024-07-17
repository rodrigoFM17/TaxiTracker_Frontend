import { useParams } from "wouter";
import InputImageFile from "../../../components/InputImageFile/InputImageFile";
import { createDriver } from "../../../services/Driver";
import { Driver } from "../../../models/Driver/Driver";
import { navigate } from "wouter/use-browser-location";

const fetchAddDriver = async(e, kitId: string) => {
    e.preventDefault()
    const name = document.querySelector("#name") as HTMLInputElement
    const lastName = document.querySelector("#lastName") as HTMLInputElement
    const image = document.querySelector("#driver-photo") as HTMLInputElement

    // pendiente el envio de la imagen

    if(name && lastName){
        const newDriver: Driver = {
            kitId,
            lastName: lastName.value,
            name: name.value,
            image: "blobdelimage"
        }
        const response = await createDriver(kitId, newDriver)
        console.log(response)
    }

}


export default function ModalAddUser ({setAddUser}: any) {

    const {kitId} = useParams()
    console.log(kitId)
    return <form className="form-add-user" onSubmit={(e) => fetchAddDriver(e, kitId ? kitId : "")}>
        <h3>Agregar Usuario</h3>
        <InputImageFile id="driver-photo" imageUrl="" />
        <input type="text" placeholder="Nombre(s)" id="name" required/>
        <input type="text" placeholder="Apellidos" id="lastName" required/>
        <input type="text" placeholder="Unidad" id="unity" required/>
        <div>
            <button id="cancelar" onClick={() => navigate(`/kit/${kitId}/conductores/agregar`)} type="button">
                cancelar
            </button>
            <button type="submit">
                agregar
            </button>
        </div>
    </form>
}