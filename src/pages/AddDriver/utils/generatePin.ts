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