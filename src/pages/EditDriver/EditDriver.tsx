import { useEffect, useState } from "react";
import InputImageFile from "../../components/InputImageFile/InputImageFile";
import LogoHeader from "../../components/LogoHeader/LogoHeader";
import { getDriverById, updateDriver } from "../../services/Driver";
import './EditDriver.css'
import { Driver } from "../../models/Driver/Driver";
import { useParams } from "wouter";
import FieldsetToEdit from "../../components/FieldsetToEdit/FieldsetToEdit";
import PinInput from "../../components/PinInput/PinInput";
import ConfirmButtons from "../../components/ConfirmButtons/ConfirmButtons";

export default function EditDriver () {

    const [driver, setDriver] = useState<Driver>({
        image: "",
        lastName: "",
        name: "",
        pin: ""
    })
    const [editedName, setEditedName] = useState<boolean>(false)
    const [editedLastName, setEditedLastName] = useState<boolean>(false)
    const {driverId} = useParams()

    const applyChanges = async() => {
        const changesToDo = new FormData()
        if(editedName){
            const name = document.querySelector("#name") as HTMLInputElement
            changesToDo.append("name", name.value)
        }
        if(editedLastName){
            const lastName = document.querySelector("#lastName") as HTMLInputElement
            changesToDo.append("last_name", lastName.value)
        }
        const pin = document.querySelector("#pin") as HTMLInputElement
        if(pin.value != driver.pin)
            changesToDo.append("pin", pin.value)
        const image = document.querySelector("#driver-photo") as HTMLInputElement
        if(image.files)
            if(image.files.length > 0)
                changesToDo.append("image", image.files[0])
        console.log(changesToDo)
        if(image.files)
            if(editedName || editedLastName || pin.value != driver.pin || image.files.length > 0)
                if(driverId){
                    const response = await updateDriver(changesToDo, driverId)
                    console.log(response)
                    history.back()
                }
    }

    useEffect( () => {
        const fetchDriver = async () => {
            if(driverId){
                const response = await getDriverById(driverId)
                if(response.data && Array.isArray(response.data))
                    setDriver(response.data[0])
            }
        }
        fetchDriver()
    },[])

    return <section className="edit-driver">
        <LogoHeader title="Editar Conductor" />
        <form onSubmit={applyChanges} className="form-edit-driver">
            <InputImageFile imageUrl={driver.image} id="driver-photo"/>
            <FieldsetToEdit 
            edit={editedName}
            setEdit={setEditedName}
            id={"name"}
            value={driver.name}
            />
            <FieldsetToEdit
            edit={editedLastName}
            setEdit={setEditedLastName}
            id="lastName"
            value={driver.lastName}
            />
            {/* <EditInput edit={editedName} value={driver.name} id="name" />
            <EditButton edit={editedName setEdit={setEditedName} /> */}
            <PinInput value={driver.pin} />
            <ConfirmButtons onCancel={() => history.back()} onConfirm={() => applyChanges()} />
        </form>
    </section>
}