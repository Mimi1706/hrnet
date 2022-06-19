import "./Modal.css"

const Modal = (props) => {
  return (
    <div className={props.display === true ? "modal-window" : "hidden"}>
      <span>Employee successfully created.</span>
      <button onClick={props.action}>Close</button>
    </div>
  )
}

export default Modal
