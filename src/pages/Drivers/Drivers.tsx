import { useEffect, useState } from "react";
import LogoHeader from "../../components/LogoHeader/LogoHeader";
import Plus from "../../components/Plus";
import './Drivers.css'
import DriverCard from "./components/DriverCard";
import { Driver } from "../../models/Driver/Driver";
import { getDriversByKitId } from "../../services/Driver";
import { useParams } from "wouter";
import { navigate } from "wouter/use-browser-location";
import { Kit } from "../../models/Kit/Kit";
import { getKit } from "../../services/Kit";

export default function Drivers () {

    
    const [drivers, setDrivers] = useState<Driver[]>([])
    const [kit, setKit] = useState<Kit>()
    const {kitId} = useParams()

    useEffect(() => {

        const fetchData = async() => {
            const res = await getDriversByKitId(kitId ? kitId : "")
            if(res.data && Array.isArray(res.data))
            setDrivers(res.data)
            console.log(res)
        }
        fetchData()

        const fetchkit = async() => {
            const response = await getKit(kitId ? kitId : "")
            if(response.data && Array.isArray(response.data)){
                setKit(response.data[0])
                console.log(response)
            }
        }
        fetchkit()
    }, [])

    return <>
        <LogoHeader title="Conductores" />
        <section className="drivers">
            {
                drivers.map(driver => (
                    <DriverCard
                    image={driver.image}
                    name={driver.name}
                    lastName={driver.lastName}
                    id={driver.id ? driver.id : ""}
                    unity={kit ? kit.unity : ""} 
                    />
                ))
            }
            <DriverCard 
            image="https://media.istockphoto.com/id/805012064/es/foto/retrato-de-hombre-hispano-maduro.jpg?s=612x612&w=0&k=20&c=Attj_f3-u7FnCZT_-VQxhowhdMrgToyfG3hd19BiIlY="
            name="Emmanuel"
            lastName="Lucas Morales"
            id="1234"
            />
            <DriverCard 
            image="https://media.istockphoto.com/id/805012064/es/foto/retrato-de-hombre-hispano-maduro.jpg?s=612x612&w=0&k=20&c=Attj_f3-u7FnCZT_-VQxhowhdMrgToyfG3hd19BiIlY="
            name="Emmanuel"
            lastName="Lucas Morales"
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