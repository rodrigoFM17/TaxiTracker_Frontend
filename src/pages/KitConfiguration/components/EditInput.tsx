type props ={
    edit: boolean,
    value:string,
    id:string
}

export default function EditInput({edit, value, id}:props) {

    return <>
    {
        edit ? (
            <input 
            type="text" 
            placeholder={value}
            id={id} 
            />
        ) : (
            <input 
            type="text" 
            value={value} 
            placeholder="" 
            id={id}
            readOnly
            />
        )
    }
    </>
}