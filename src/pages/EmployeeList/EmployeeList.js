import "./EmployeeList.css"

import EmployeeListTable from "../../components/EmployeeListTable/EmployeeListTable"

const EmployeeList = () => {
  return (
    <main className="employeeListMain">
      <h1>Current Employees</h1>
      <EmployeeListTable />
    </main>
  )
}

export default EmployeeList
