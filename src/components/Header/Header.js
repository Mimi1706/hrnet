import "./Header.css"
import { Link } from "react-router-dom"
import { useLocation } from "react-router-dom"

/**
 * 
 * @returns {JSX} Header
 */

const Header = () => {
  const location = useLocation()

  return (
    <header>
      <h1 className="logo">HRnet</h1>

      {location.pathname === "/employee-list" ? (
        <Link to={`*`}>Create employee</Link>
      ) : (
        <Link to={`/employee-list`}>View current employees</Link>
      )}
    </header>
  )
}

export default Header
