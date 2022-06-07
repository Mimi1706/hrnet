import "./Header.css"
import { Link } from "react-router-dom"
import { useLocation } from "react-router-dom"

const Header = () => {
  const location = useLocation()

  return (
    <header>
      <h1 className="logo">HRnet</h1>

      {location.pathname === "/" ? (
        <Link to={`/employee-list`}>View current employees</Link>
      ) : (
        <Link to={`/`}>Create employee</Link>
      )}
    </header>
  )
}

export default Header
