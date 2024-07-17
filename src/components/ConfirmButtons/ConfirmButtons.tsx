import './ConfirmButton.css'

type props = {
    onCancel: any,
    onConfirm: any

}
export default function ConfirmButtons({onCancel, onConfirm}: props) {

    return <div className="confirm-buttons">
        <button type="button" onClick={onCancel}>
            Cancelar
        </button>
        <button className="button-invert" onClick={onConfirm} type="button">
            Guardar
        </button>
    </div>
}