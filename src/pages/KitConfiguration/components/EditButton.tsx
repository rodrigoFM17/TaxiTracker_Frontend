import Edit from "../../../components/Edit"
import XMark from "../../../components/XMark"

type props ={
    edit: boolean,
    setEdit: any
}

export default function EditButton ({edit, setEdit}:props) {

    return <button onClick={() => setEdit(!edit)} type="button">
    {
        !edit ? 
        <Edit className="container-images" color="#525252" />
        :
        <XMark className="container-images" color="#525252"/>
    }  
    </button>
}