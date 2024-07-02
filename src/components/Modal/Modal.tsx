import './Modal.css'
export default function Modal({children}:any) {

    return <div className="modal">
        {children}
    </div>
}