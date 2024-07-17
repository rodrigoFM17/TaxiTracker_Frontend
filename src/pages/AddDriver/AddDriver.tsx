import InputImageFile from "../../components/InputImageFile/InputImageFile";
import LogoHeader from "../../components/LogoHeader/LogoHeader";
import './AddDriver.css'

const generatePin = () => {
    const pinInput = document.querySelector("#pin") as HTMLInputElement
    let randomPin = Math.round(Math.random() * 10000).toString()
    if(randomPin.length < 4){
        const zerosToAdd = 4 - randomPin.length
        for (let i =1; i<= zerosToAdd;i++){
            randomPin = "0" + randomPin
        }
    }else if (randomPin.length > 4){
        randomPin.substring(0,3)
    }
    pinInput.value = randomPin   
}
export default function AddDriver () {

    const fetchAddDriver = () => {

    }

    return <section className="add-driver">
        <LogoHeader title="agregar conductor" />

        <form className="form-add-user" onSubmit={fetchAddDriver}>
        <InputImageFile id="driver-photo" imageUrl="" />
        <input type="text" placeholder="Nombre(s)" required/>
        <input type="text" placeholder="Apellidos" required/>
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