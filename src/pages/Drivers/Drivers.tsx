import { useState } from "react";
import LogoHeader from "../../components/LogoHeader/LogoHeader";
import Plus from "../../components/Plus";
import './Drivers.css'
import DriverCard from "./components/DriverCard";
import ModalAddUser from "./components/ModalAddUser";

export default function Drivers () {

    const [addUser, setAddUser] = useState<Boolean>(false)

    return <>
        <LogoHeader title="Conductores" />
        <section className="drivers">
            <DriverCard 
            imageUrl="https://media.istockphoto.com/id/805012064/es/foto/retrato-de-hombre-hispano-maduro.jpg?s=612x612&w=0&k=20&c=Attj_f3-u7FnCZT_-VQxhowhdMrgToyfG3hd19BiIlY="
            name="Emmanuel"
            lastName="Lucas Morales"
            unity="KY-031" 
            id="1234"
            />
            <DriverCard 
            imageUrl="https://media.istockphoto.com/id/805012064/es/foto/retrato-de-hombre-hispano-maduro.jpg?s=612x612&w=0&k=20&c=Attj_f3-u7FnCZT_-VQxhowhdMrgToyfG3hd19BiIlY="
            name="Emmanuel"
            lastName="Lucas Morales"
            unity="KY-031"
            id="1234"
            />  
            {
            addUser ? 
            <ModalAddUser setAddUser={setAddUser}/>
            :
            <button id="plus-button" onClick={() => setAddUser(!addUser)}>
                <Plus 
                className="container-images" 
                color="black"
                />
            </button>
            }
            
        </section>
    </>

}