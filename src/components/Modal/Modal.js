import "./Modal.css"
import { useState } from "react"

const Modal = () => {
  const [modalDisplay, setModalDisplay] = useState(false)

  return (
    <div className={modalDisplay === true ? "modal-window" : "hidden"}>
      <span>Employee successfully created.</span>
      <button onClick={() => setModalDisplay(false)}>Close</button>
    </div>
  )
}

export default Modal
