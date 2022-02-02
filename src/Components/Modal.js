const Modal = (clase, controlModal ) => {
    return (
        <div className="modal-compra">
        <div> <button onClick={controlModal}>X</button> </div>
        <h1 className={clase}>Usted va a comprar</h1>
        <p>Desea seguir?</p>
        </div>
    )
}

export default Modal