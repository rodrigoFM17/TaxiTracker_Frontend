import LogoHeader from "../../components/LogoHeader/LogoHeader";
import './KitConfiguration.css'
import Gears from "../../components/Gears";
import { useEffect, useState } from "react";
import Modal from "../../components/Modal/Modal";
import EditButton from "./components/EditButton";
import EditInput from "./components/EditInput";
import DriverItem from "./components/Driver";
import { getKit, updateKit } from "../../services/Kit";
import { useParams } from "wouter";
import { Driver } from "../../models/Driver/Driver";
import { Kit } from "../../models/Kit/Kit";
import { deleteDriver, getDriversByKitId } from "../../services/Driver";

export default function KitConfiguration () {

    const [editName, setEditName] = useState<boolean>(false)
    const [editUnity, setEditUnity] = useState<boolean>(false)
    const [drivers, setDrivers] = useState<Driver[]>([])
    const [driversToDelete, setDriversToDelete] = useState<string[]>([])
    const [kit, setKit] = useState<Kit>({
        name: "",
        unity: "",
        userId: "",
    })
    const [confirm, setConfirm] = useState<boolean>(false)
    const {kitId} = useParams()

    useEffect(() => {
        const fetchData = async() => {
            if(kitId){
                const responseKit = await getKit(kitId)
                if(responseKit.data && Array.isArray(responseKit.data))
                    setKit(responseKit.data[0])
                const responseDrivers = await getDriversByKitId(kitId)
                if(responseDrivers.data && Array.isArray(responseDrivers.data))
                    setDrivers(responseDrivers.data)

            }
        }
        fetchData()
    },[])

    const applyChanges = async(e) => {
        e.preventDefault()
        const newName = document.querySelector("#name") as HTMLInputElement
        const newUnity = document.querySelector("#unity") as HTMLInputElement
        
        const updatedKit = {
            unit_code: newUnity.value,
            name: newName.value,
        }
        if(kitId){
            const response = await updateKit(kitId, updatedKit)
            console.log(response)
            console.log(driversToDelete)
            driversToDelete.forEach(async driver => {
                if(driver){
                    const response = await deleteDriver(driver)
                    console.log(response)
                }
            })

            history.back()
        }

    }

    return <>
        <LogoHeader title="Editar Kit"/>

        <section className="kit-configuration" >
            <Gears color="#F7B731" className="container-images" />

            <form>
                <span>nombre del kit</span>
                <div>
                    <EditInput edit={editName} value={kit.name} id="name"/>
                    <EditButton edit={editName} setEdit={setEditName}/>
                </div>
                <span>unidad del kit</span>
                <div>
                    <EditInput edit={editUnity} value={kit.unity} id="unity"/>
                    <EditButton edit={editUnity} setEdit={setEditUnity}/>
                </div>
                <span>conductores</span>
                <div>
                    {
                        drivers.map(driver => (
                            <DriverItem 
                            id={driver.id ? driver.id : ""}
                            name={driver.name} 
                            lastName={driver.lastName}
                            driversToDelete={driversToDelete}
                            setDriversToDelete={setDriversToDelete} 
                            key={`driver${driver.name}`}
                            />
                        ))
                    }
                    
                </div>
                <div className="container-save-button">
                    <button type="button" onClick={() => location.reload()}>
                        Cancelar
                    </button>
                    <button className="button-invert" onClick={() => setConfirm(true)} type="button">
                        Guardar
                    </button>
                </div>
            </form>
            <ConfirmModal confirm={confirm} onAccept={applyChanges} onCancel={setConfirm} />

        </section>
    </>
}


const ConfirmModal = ({confirm, onAccept, onCancel}: any) => {


    return (confirm && <Modal>
    <form>
        <span>¿Guardar los cambios?</span>
        <button onClick={() => onCancel(false)}>
            No
        </button>
        <button className="button-invert" onClick={(e) => onAccept(e)}>
            Si
        </button>
    </form>
</Modal>)
}