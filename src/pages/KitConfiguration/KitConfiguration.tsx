import LogoHeader from "../../components/LogoHeader/LogoHeader";
import './KitConfiguration.css'
import Gears from "../../components/Gears";
import { useState } from "react";
import Edit from "../../components/Edit";
import UserMinus from "../../components/UserMinus";
import ConfirmModal from "../../components/ConfirmModal/ConfirmModal";
import Modal from "../../components/Modal/Modal";
import Driver from "../../components/Driver";
import XMark from "../../components/XMark";
import EditButton from "./components/EditButton";
import EditInput from "./components/EditInput";
import DriverItem from "./components/Driver";

const KitConfig = {
    name: "kit 1",
    unity: "KY-03124",
    drivers: [
        {name: "Emmanuel", lastName: "Lucas Morales"},
        {name: "Adrian Mauricio", lastName: "Hernandez Perez"},
        {name: "Rodrigo", lastName: "Flores Morales"}
    ]
}

type changes = {
    name: string,
    unity: string,
    driversToDelete: string[]
}
const changesToDo:changes = {
    name:"",
    unity: "",
    driversToDelete: []
}

export default function KitConfiguration () {

    const [editName, setEditName] = useState<boolean>(false)
    const [editUnity, setEditUnity] = useState<boolean>(false)
    const [confirm, setConfirm] = useState<boolean>(false)
    
    const applyChanges = () => {
        const newName = document.querySelector("#name") as HTMLInputElement
        const newUnity = document.querySelector("#unity") as HTMLInputElement

        if(editName && newName) {
            changesToDo.name = newName.value
        }
        if(editUnity && newUnity){
            changesToDo.unity = newUnity.value
        }

        console.log(changesToDo)
    }

    return <>
        <LogoHeader title="Editar Kit"/>

        <section className="kit-configuration" >
            <Gears color="#F7B731" className="container-images" />

            <form>
                <span>nombre del kit</span>
                <div>
                    <EditInput edit={editName} value={KitConfig.name} id="name"/>
                    <EditButton edit={editName} setEdit={setEditName}/>
                </div>
                <span>unidad del kit</span>
                <div>
                    <EditInput edit={editUnity} value={KitConfig.unity} id="unity"/>
                    <EditButton edit={editUnity} setEdit={setEditUnity}/>
                </div>
                <span>conductores</span>
                <div>
                    {
                        KitConfig.drivers.map(driver => (
                            <DriverItem 
                            name={driver.name} 
                            lastName={driver.lastName}
                            driversToDelete={changesToDo.driversToDelete} 
                            key={`driver${driver.name}`}
                            />
                            // <>
                            //     <input type="text" value={`${driver.name} ${driver.lastName}`} placeholder="" key={`input${driver.name}`} readOnly/>
                            //     <button onClick={() => deleteUser(driver.name)} type="button">
                            //         <UserMinus className="container-images" color="#525252" />
                            //     </button>
                            // </>
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
            {
                confirm && <Modal>
                    <form>
                        <span>¿Guardar los cambios?</span>
                        <button onClick={() => setConfirm(false)}>
                            No
                        </button>
                        <button className="button-invert" onClick={() => applyChanges()}>
                            Si
                        </button>
                    </form>
                </Modal>
            }

        </section>
    </>
}