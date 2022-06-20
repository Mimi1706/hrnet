import "./EmployeeList.css"

import EmployeeListTable from "../../components/EmployeeListTable/EmployeeListTable"


/**
 * Employee list page
 * @returns  
 */


const EmployeeList = () => {
  return (
    <main className="employeeListMain">
      <h1>Current Employees</h1>
      <EmployeeListTable />
    </main>
  )
}

export default EmployeeList
