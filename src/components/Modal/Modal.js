import "./Modal.css"

/**
 * 
 * @param {boolean} props.display
 * @param {function} props.action
 * @returns {JSX} Modal component
 */

const Modal = (props) => {
  return (
    <div className={props.display === true ? "modal-window" : "hidden"}>
      <span>Employee successfully created.</span>
      <button onClick={props.action}>Close</button>
    </div>
  )
}

export default Modal
