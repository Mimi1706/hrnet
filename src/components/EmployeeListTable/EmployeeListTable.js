import "./EmployeeListTable.css"

import { useSelector } from "react-redux"

const EmployeeListTable = () => {
  const employeeList = useSelector((state) => state.savedEmployees.employeeList)

  return (
    <table>
      <thead>
        <tr>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Start Date</th>
          <th>Department</th>
          <th>Date of Birth</th>
          <th>Street</th>
          <th>City</th>
          <th>State</th>
          <th>Zip Code</th>
        </tr>
      </thead>
      <tbody>
        {employeeList.map(({ employee }, index) => {
          return (
            <tr key={`employee-${index}`}>
              <td>{employee.firstName}</td>
              <td>{employee.lastName}</td>
              <td>{employee.startDate}</td>
              <td>{employee.department}</td>
              <td>{employee.birthDate}</td>
              <td>{employee.street}</td>
              <td>{employee.city}</td>
              <td>{employee.state}</td>
              <td>{employee.zipCode}</td>
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}

export default EmployeeListTable
