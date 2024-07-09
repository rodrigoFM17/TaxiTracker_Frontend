import Chart from '../../../components/Chart'
import Edit from '../../../components/Edit'
import UserMinus from '../../../components/UserMinus'
import { navigate } from 'wouter/use-browser-location'
import { useState } from 'react'
import Modal from '../../../components/Modal/Modal'
import InputImageFile from '../../../components/InputImageFile/InputImageFile'
import DriverImage from '../../../components/DriverImage/DriverImage'
type driver = {
    imageUrl: string,
    name: string,
    id:string,
    unity: string,
    lastName:string
}

export default function DriverCard ({imageUrl, name, lastName, id, unity}: driver) {

    const [removeUser, setRemoveUser] = useState(false);
    const [editUser, setEditUser] = useState(false)

    return <article className="driver-card">

        <DriverImage imageUrl={imageUrl} name={name} />
        <h3>{`${name} ${lastName}`}</h3>
        <span>{unity}</span>
        <button id='edit' onClick={() => setEditUser(!editUser)}>
            <Edit color='#F7B731' className='container-images' />
        </button>
        <button id='minus-user' onClick={() => setRemoveUser(!removeUser)}>
            <UserMinus color='#FCE2AD' className='container-images' />
        </button>
        <button id='chart' onClick={() => navigate(`/kit/1/conductores/${id}/estadisticas`)}>
            <Chart color='#151515' className='container-images'/>
        </button>
        {removeUser && (
            <Modal>
                <form className='modal-remove-user'>
                    <h3>¿Estas seguro que quieres eliminar este usuario? </h3>
                    <div>
                        <button type='button' onClick={() => setRemoveUser(false)}>
                            No
                        </button>
                        <button>Si</button>
                    </div>
                </form>
            </Modal>
        )}
        {editUser && (
            <Modal>
                <form className="modal-edit-user">
                    <h3>Editar Usuario</h3>
                    <InputImageFile id='driver-photo' imageUrl={imageUrl}/>
                    <input type="text" placeholder={name}/>
                    <input type="text" placeholder={lastName} />
                    <input type="text" placeholder={unity} />
                    <div>
                        <button onClick={() => setEditUser(false)}>cancelar</button>
                        <button>aceptar</button>
                    </div>
                </form>
            </Modal>
        )}
        
    </article>
}