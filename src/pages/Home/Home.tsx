import { useContext, useEffect, useState } from 'react'
import KitCard from '../../components/KitCard/KitCard'
import LogoHeader from '../../components/LogoHeader/LogoHeader'
import './Home.css'
import { Kit } from '../../models/Kit/Kit'
import Plus from '../../components/Plus'
import ConfirmButtons from '../../components/ConfirmButtons/ConfirmButtons'
import { addKit, getKits } from '../../services/Kit'
import UserContext from '../../context/UserContext'

const fetchAddKit = async (userId: string) => {
    const name = document.querySelector("#name") as HTMLInputElement
    const unity = document.querySelector("#unity") as HTMLInputElement
    console.log(userId)

    const response = await addKit({
        userId: userId, 
        unity: unity.value,
        name: name.value,
    })

    console.log(response)
}


export default function Home() {

    const [kits, setKits] = useState<Kit[]>()
    const [addKit, setAdd] = useState<boolean>()
    const {user} = useContext(UserContext)

    console.log(user)

    useEffect(() => {
        
        const fetchData = async () => {
            const responseKits = await getKits(user.id)
            console.log(responseKits)
            if(responseKits.data && Array.isArray(responseKits.data)){
                setKits(responseKits.data)
            }
        }
        if(user.id)
        fetchData()
    }, [])

    return <>
        <LogoHeader title={`Bienvenido ${user.name}`}/>
        <section className='home'>
            {
                kits?.map(({name, unity, userId, id})=>(
                    <KitCard name={name} unity={unity} userId={userId} id={id} key={id} />
                ))
            }
            
            
            {
                addKit ? <form className='form-add-user'>
                    <h3>agregar kit</h3>
                    <input type="text" placeholder='nombre' id='name'/>
                    <input type="text" placeholder='unidad' id='unity'/>
                    <ConfirmButtons onCancel={() => setAdd(false)} onConfirm={() => fetchAddKit(user.id)} />
                </form>
                :
                <button className='button-invert' onClick={() => setAdd(true)}>
                    <Plus color='#F7B731' className='container-images' />
                </button>
            }
        </section>
        {/* hacer el consumo de la api en el recurso de los kits */}
        
    </>
}