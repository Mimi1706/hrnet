import "./EmployeeList.css"

import { useSelector } from "react-redux"

const EmployeeList = () => {
  const employeeList = useSelector((state) => state.savedEmployees.employeeList)

  const getStore = () => {
    console.log(employeeList)
  }

  return (
    <main className="employeeListMain">
      <h1>Current Employees</h1>
      <button onClick={getStore}>getStore</button>
    </main>
  )
}

export default EmployeeList
