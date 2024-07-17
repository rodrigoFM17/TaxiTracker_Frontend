
export const translateError = (error:string):string => {
    if(error == "Incorrect email" || error == "Incorrect password"){
        return "contraseña o correo incorrecto"
    }
    if(error == "Email has already been registered"){
        return "este correo ya existe"
    }
    return "algo salio mal, intenta de nuevo mas tarde"
}