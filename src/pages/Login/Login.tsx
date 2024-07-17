import { useContext, useState } from 'react'
import logo from '../../../public/logo_taxi.png'
import './Login.css'
import { loginUser, registerUser } from '../../services/Users'
import { translateError } from './utilities/translateError'
import User from '../../models/User/User'
import UserContext from '../../context/UserContext'
import { navigate } from 'wouter/use-browser-location'
import { GeneralFetchResponse } from '../../models/GeneralFetchResponse'

const getCredentials = () => {
    const email = document.querySelector("#email") as HTMLInputElement
    const pass = document.querySelector("#password") as HTMLInputElement

    return {
        email: email.value,
        password: pass.value
    }
}

export default function Login () {

    const [register, setRegister] = useState<boolean>(false)
    const [success, setSuccess] = useState<boolean>(false)
    const [message, setMessage] = useState<String>("")
    const {setUser} = useContext(UserContext)

    const validateResponse = (res: GeneralFetchResponse<User>):boolean => {
        if(res.status != "success"){
            setSuccess(false)
            if(res.msg){
                const error = translateError(res.msg)
                setMessage(error)
                alert(error)
            }
            return false
        } else {
            setSuccess(true)
            setMessage("")
            return true
        }
    }
    const fetchRegisterUser = async (e:any) => {
        e.preventDefault()
        const credentials = getCredentials()
        const name = document.querySelector("#name") as HTMLInputElement
        const lastName = document.querySelector("#lastName") as HTMLInputElement
        
        const response = await registerUser({
            name: name.value,
            last_name: lastName.value,
            email: credentials.email,
            password: credentials.password
        })
        console.log(response)
        if(validateResponse(response))
            setRegister(false)
    }  

    const fetchLoginUser = async (e:any) => {
        e.preventDefault()
        const credentials = getCredentials()
        const response = await loginUser(credentials)
        console.log(response)
        if(validateResponse(response)){
            setUser(response.data)
            navigate("/")
        }
    }   

    return <>
        <section className="login">
            <form className='login-form' onSubmit={register ? fetchRegisterUser : fetchLoginUser}>
                <img src={logo} alt="logo taxi tracker" className='logo' />
                <h1>{register ? "Registrate" : "Inicia Sesion"} </h1>
                {
                    register && <>
                        <input type="text" placeholder='Nombre(s)' id='name' required/>
                        <input type="text" placeholder='Apellidos' id='lastName' required/>
                    </>
                }
                <input type="email" placeholder='Correo' id='email'/>
                <input type="password" placeholder='Contraseña' id='password' minLength={8}/>
                {
                    !success && <span className='error-message'>
                        {message}
                    </span>
                }

                <span onClick={() => setRegister(!register)}>
                    { register ? "inicia sesion" : "registrate" } aqui
                </span>
                {
                    register ? 
                    <button type='submit'>
                        registrate
                    </button>
                    :
                    <button type='submit'>
                        Entrar
                    </button>
                }
                
            </form>
        </section>
    </>
}