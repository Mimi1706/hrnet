import "./EmployeeListTable.css"

import { useSelector } from "react-redux"
import { useState } from "react"

import { employeeListTest } from "../../data/employeeListTest"

const EmployeeListTable = () => {
  //const employeeList = useSelector((state) => state.savedEmployees.employeeList)

  const employeeList = employeeListTest

  const [selectedField, setSelectedField] = useState(null)
  const [order, setOrder] = useState(true) // true is ascending / false is descending
  const [sortedData, setSortedData] = useState(employeeList)

  const columns = [
    { label: "First Name", accessor: "firstName" },
    { label: "Last Name", accessor: "lastName" },
    { label: "Start Date", accessor: "startDate" },
    { label: "Department", accessor: "department" },
    { label: "Date of birth", accessor: "dateOfBirth" },
    { label: "Street", accessor: "street" },
    { label: "City", accessor: "city" },
    { label: "State", accessor: "state" },
    { label: "Zip code", accessor: "zipCode" },
  ]

  // Sorts by ascending or descending
  const handleSorting = (accessor) => {
    setSelectedField(accessor)

    setOrder(!order)

    // Sets order by ascending
    if (order === true) {
      setSortedData(
        [...sortedData].sort((a, b) =>
          a.employee[accessor].localeCompare(b.employee[accessor])
        )
      )
    }

    // Sets order by descending
    else {
      setSortedData(
        [...sortedData].sort((b, a) =>
          a.employee[accessor].localeCompare(b.employee[accessor])
        )
      )
    }

    //console.log("the order inside is " + order)
  }

  //console.log(order)

  // Search bar
  const handleInput = (input) => {
    // Takes each employee of the employeeList, joins the informations together in lowercase and compares it to the input to filter
    let sortedInput = employeeList.filter((employee) =>
      Object.values(employee.employee)
        .join(" ")
        .toLocaleLowerCase()
        .includes(input.toLocaleLowerCase())
    )

    setSortedData(sortedInput)
  }

  return (
    <>
      <div className="show-search">
        <div>
          Show
          <select className="show-select" type="select" placeholder="Search...">
            <option>10</option>
          </select>
          Entries
        </div>
        <input
          className="search-bar"
          type="text"
          placeholder="Search..."
          name="searchBar"
          onChange={(e) => {
            handleInput(e.target.value)
          }}
        ></input>
      </div>
      <table>
        <thead>
          <tr>
            {columns.map(({ label, accessor }) => {
              return (
                <th key={accessor} onClick={() => handleSorting(accessor)}>
                  {label}
                  <div className="arrows">
                    <span
                      className={
                        order === false && accessor === selectedField // checks if the selected column is the same as the clicked column
                          ? "arrow-selected"
                          : ""
                      }
                    >
                      &#9650;
                    </span>
                    <span
                      className={
                        order === true && accessor === selectedField // checks if the selected column is the same as the clicked column
                          ? "arrow-selected"
                          : ""
                      }
                    >
                      &#9660;
                    </span>
                  </div>
                </th>
              )
            })}
          </tr>
        </thead>
        <tbody>
          {sortedData.map(({ employee }, index) => {
            return (
              <tr key={`employee-${index}`}>
                {columns.map(({ accessor }) => {
                  return (
                    <td key={`employee-${index}-${accessor}`}>
                      {employee[accessor]}
                    </td>
                  )
                })}
              </tr>
            )
          })}
        </tbody>
      </table>

      <span>Hello</span>
    </>
  )
}

export default EmployeeListTable
