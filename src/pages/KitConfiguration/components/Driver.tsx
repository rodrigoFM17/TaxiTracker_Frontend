import { useEffect, useState } from "react"
import UserMinus from "../../../components/UserMinus"
import XMark from "../../../components/XMark"

type props ={
    id: string,
    name:string,
    lastName: string,
    driversToDelete: string[],
    setDriversToDelete: any
}

export default function DriverItem ({id, name, lastName, driversToDelete, setDriversToDelete}:props) {

    const [deleted, setDeleted] = useState<boolean>(false)

    useEffect(() => {
        if(deleted) {
            driversToDelete.push(id)
            setDriversToDelete(driversToDelete)
        } else {
            setDriversToDelete(driversToDelete.filter(driver => driver != id))
        }
        },[deleted])
    return <>
        <input 
        type="text" 
        className={`${deleted && "deleted"}`}
        value={`${name} ${lastName}`} 
        placeholder=""
        key={`input${name}`} 
        readOnly
        />
        <button onClick={() => setDeleted(!deleted)} type="button">
            {
                deleted ? <XMark className="container-images" color="#525252"/>
                :
                <UserMinus className="container-images" color="#525252" />
            }
        </button>
    </>
}