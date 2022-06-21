import "./Modal.css"

/**
 * 
 * @param {boolean} props.display
 * @param {string} props.message
 * @param {function} props.action
 * @returns {JSX} Modal component
 */

const Modal = (props) => {
  return (
    <div className={props.display === true ? "modal-window" : "hidden"}>
      <p>{props.message}</p>
      <button onClick={props.action}>Close</button>
    </div>
  )
}

export default Modal
