import Modal from "../Modal/Modal";

type props = {
    functionToDo: any,
    message: string,
}

export default function ConfirmModal ({functionToDo, message}: props) {

    

    return <Modal>
        <form onSubmit={() => functionToDo} className="confirm-modal">    
            <span>
                Estas seguro de {message}
            </span>
            <button type="reset">
                No
            </button>
            <button type="submit">
                Si
            </button>
        </form>
    </Modal>

}