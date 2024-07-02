import InputImageFile from "../../../components/InputImageFile/InputImageFile";


export default function ModalAddUser ({setAddUser}: any) {

    return <form className="form-add-user">
        <h3>Agregar Usuario</h3>
        <InputImageFile id="driver-photo" imageUrl="" />
        <input type="text" placeholder="Nombre(s)" required/>
        <input type="text" placeholder="Apellidos" required/>
        <input type="text" placeholder="Unidad" required/>
        <div>
            <button id="cancelar" onClick={() => setAddUser(false)}>
                cancelar
            </button>
            <button>
                agregar
            </button>
        </div>
    </form>
}