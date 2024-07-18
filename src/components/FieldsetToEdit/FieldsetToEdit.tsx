import EditButton from '../../pages/KitConfiguration/components/EditButton'
import EditInput from '../../pages/KitConfiguration/components/EditInput'
import './FieldsetToEdit.css'

type props ={
    edit: boolean,
    setEdit: any,
    value: string,
    id: string
}
export default function FieldsetToEdit({edit, setEdit, value, id}: props) {

    return <div className='fieldset-to-edit'>
        <EditInput edit={edit} value={value} id={id} />
        <EditButton edit={edit} setEdit={setEdit} />
    </div>
}