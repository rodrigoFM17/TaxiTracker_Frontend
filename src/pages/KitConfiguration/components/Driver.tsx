import { useEffect, useState } from "react"
import UserMinus from "../../../components/UserMinus"
import XMark from "../../../components/XMark"

type props ={
    name:string,
    lastName: string,
    driversToDelete: string[]
}

export default function DriverItem ({name, lastName, driversToDelete}:props) {

    const [deleted, setDeleted] = useState<boolean>(false)

    useEffect(() => {
        deleted ?
        driversToDelete.push(name)
        :
        driversToDelete = driversToDelete.filter(driver => driver != name)
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