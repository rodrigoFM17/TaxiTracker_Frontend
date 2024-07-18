import './PinInput.css'

export const generatePin = () => {
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
type props = {
    value?: string
}

export default function PinInput ({value}: props) {
    return  <>
    <div className="container-pin">
        <input 
        type="number" 
        placeholder="pin"
        value={value}
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
    </>
}