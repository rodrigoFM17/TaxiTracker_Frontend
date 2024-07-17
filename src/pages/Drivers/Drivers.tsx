import { useContext, useEffect, useState } from "react";
import LogoHeader from "../../components/LogoHeader/LogoHeader";
import Plus from "../../components/Plus";
import './Drivers.css'
import DriverCard from "./components/DriverCard";
import ModalAddUser from "./components/ModalAddUser";

import { Driver } from "../../models/Driver/Driver";
import UserContext from "../../context/UserContext";
import { getDriversByKitId } from "../../services/Driver";
import { useParams } from "wouter";
import { navigate } from "wouter/use-browser-location";

export default function Drivers () {

    
    const [drivers, setDrivers] = useState<Driver[]>([])
    const {user} = useContext(UserContext)
    const {kitId} = useParams()

    useEffect(() => {

        const fetchData = async() => {
            const res = await getDriversByKitId(user.id)
            console.log(res)
        }
        fetchData()
    })

    return <>
        <LogoHeader title="Conductores" />
        <section className="drivers">
            {
                drivers.map(driver => (
                    <DriverCard
                    image={driver.image}
                    name={driver.name}
                    lastName={driver.lastName}
                    unity=""
                    id={driver.id} 
                    />
                ))
            }
            <DriverCard 
            image="https://media.istockphoto.com/id/805012064/es/foto/retrato-de-hombre-hispano-maduro.jpg?s=612x612&w=0&k=20&c=Attj_f3-u7FnCZT_-VQxhowhdMrgToyfG3hd19BiIlY="
            name="Emmanuel"
            lastName="Lucas Morales"
            unity="KY-031" 
            id="1234"
            />
            <DriverCard 
            image="https://media.istockphoto.com/id/805012064/es/foto/retrato-de-hombre-hispano-maduro.jpg?s=612x612&w=0&k=20&c=Attj_f3-u7FnCZT_-VQxhowhdMrgToyfG3hd19BiIlY="
            name="Emmanuel"
            lastName="Lucas Morales"
            unity="KY-031"
            id="1234"
            />  
            <button id="plus-button" onClick={() => navigate(`/kit/${kitId}/conductores/agregar`)}>
                <Plus 
                className="container-images" 
                color="black"
                />
            </button>
        </section>
    </>

}