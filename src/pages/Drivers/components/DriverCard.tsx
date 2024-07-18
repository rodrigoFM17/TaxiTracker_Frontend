import Chart from '../../../components/Chart'
import Edit from '../../../components/Edit'
import UserMinus from '../../../components/UserMinus'
import { navigate } from 'wouter/use-browser-location'
import { useState } from 'react'
import Modal from '../../../components/Modal/Modal'
import DriverImage from '../../../components/DriverImage/DriverImage'
import { deleteDriver } from '../../../services/Driver'
import { useParams } from 'wouter'

type props = {
    image: string,
    name: string,
    lastName: string,
    id: string,
    unity: string
}

export default function DriverCard ({image, name, lastName, id, unity}: props) {

    const [removeUser, setRemoveUser] = useState(false);
    const {kitId} = useParams()

    const fetchDeleteDriver = async(e: any) => {
        e.preventDefault()
        const response = await deleteDriver(id)
        console.log(response)
        setRemoveUser(false)
        window.location.reload()
    }

    return <article className="driver-card">

        <div className='container-driver-image'>
            <DriverImage imageUrl={image} name={name} />
        </div>
        <h3>{`${name} ${lastName}`}</h3>
        <span>{unity}</span>
        <button id='edit' onClick={() => navigate(`/kit/${kitId}/conductores/${id}/actualizar`)}>
            <Edit color='#F7B731' className='container-images' />
        </button>
        <button id='minus-user' onClick={() => setRemoveUser(!removeUser)}>
            <UserMinus color='#FCE2AD' className='container-images' />
        </button>
        <button id='chart' onClick={() => navigate(`/kit/${kitId}/conductores/${id}/estadisticas`)}>
            <Chart color='#151515' className='container-images'/>
        </button>
        {removeUser && (
            <Modal>
                <form className='modal-remove-user' onSubmit={(e) => fetchDeleteDriver(e)}>
                    <h3>¿Estas seguro que quieres eliminar este usuario? </h3>
                    <div>
                        <button type='button' onClick={() => setRemoveUser(false)}>
                            No
                        </button>
                        <button type='submit'>
                            Si
                        </button>
                    </div>
                </form>
            </Modal>
        )}
        
        
    </article>
}