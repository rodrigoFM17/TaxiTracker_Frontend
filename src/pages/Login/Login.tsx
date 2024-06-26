import logo from '../../../public/logo_taxi.png'
import './Login.css'

export default function Login () {

    return <>
        <section className="login">
            <form className='login-form'>
                <img src={logo} alt="logo taxi tracker" className='logo' />
                <input type="email" placeholder='Correo'/>
                <input type="password" placeholder='Contraseña'/>

                <button>
                    Entrar
                </button>
            </form>
        </section>
    </>
}