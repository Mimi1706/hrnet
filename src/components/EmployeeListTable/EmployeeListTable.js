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

  // Used when user selected "show ** entries"
  const [allEntries, setAllEntries] = useState(null)
  let [page, setPage] = useState(0)

  const [selectedEntry, setSelectedEntry] = useState(null)
  let showEntries = [5, 10, 25, 100]

  // Displays the number of entries
  const [previousEntries, setPreviousEntries] = useState(1)
  const [currentEntries, setCurrentEntries] = useState(employeeList.length)

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
  const handleAscending = (accessor) => {
    if (order === false || order === null) {
      setSelectedField(accessor)
      setOrder(true)
      setSortedData(
        [...sortedData].sort((a, b) =>
          a.employee[accessor].localeCompare(b.employee[accessor])
        )
      )
    } else {
      setOrder(null)
      allEntries ? setSortedData(allEntries[page]) : setSortedData(employeeList)
    }
  }

  const handleDescending = (accessor) => {
    if (order === true || order === null) {
      setSelectedField(accessor)
      setOrder(false)
      setSortedData(
        [...sortedData].sort((b, a) =>
          a.employee[accessor].localeCompare(b.employee[accessor])
        )
      )
    } else {
      setOrder(null)
      allEntries ? setSortedData(allEntries[page]) : setSortedData(employeeList)
    }
  }

  const handleSearch = (input) => {
    let sortedInput = null

    // Only looks for employee displayed if a "show ** entries" number was selected
    if (allEntries !== null) {
      sortedInput = allEntries[page].filter((employee) =>
        Object.values(employee.employee)
          .join(" ")
          .toLocaleLowerCase()
          .includes(input.toLocaleLowerCase())
      )
    }
    // Takes each employee of the employeeList, joins the informations together in lowercase and compares it to the input to filter
    else {
      sortedInput = employeeList.filter((employee) =>
        Object.values(employee.employee)
          .join(" ")
          .toLocaleLowerCase()
          .includes(input.toLocaleLowerCase())
      )
    }

    setSortedData(sortedInput)
  }

  const handleShowEntries = (entries) => {
    setOrder(null) // Resets ascending/descending
    setSelectedEntry(entries) // Saves the number picked in show entries

    // Resets all entries display and page number
    setPreviousEntries(1)
    setPage(0)

    // if the number of employees is smaller than the "show ** entries" number chosen, the max number displayed will be the total number of employees
    entries > employeeList.length
      ? setCurrentEntries(employeeList.length)
      : setCurrentEntries(entries)

    let allChunks = []
    // Cuts the employee list in several chunks to display in pages
    for (let i = 0; i < employeeList.length; i += entries) {
      let chunk = employeeList.slice(i, i + entries)
      allChunks.push(chunk)
    }
    setSortedData(allChunks[0])
    setAllEntries(allChunks)
  }

  const handlePreviousPage = () => {
    setOrder(null)
    if (page !== 0) {
      setPage(page - 1)
      setSortedData(allEntries[page - 1])

      if (previousEntries !== 0) {
        setPreviousEntries(previousEntries - selectedEntry)
        setCurrentEntries(currentEntries - allEntries[page].length)
      }
    }
  }

  const handleNextPage = () => {
    setOrder(null)
    if (allEntries && page + 1 < allEntries.length) {
      setPage(page + 1)
      setSortedData(allEntries[page + 1])

      if (employeeList.length > currentEntries) {
        setPreviousEntries(previousEntries + selectedEntry)
        setCurrentEntries(currentEntries + allEntries[page + 1].length)
      }
    }
  }

  return (
    <>
      <div className="show-search">
        <div>
          Show
          <select className="show-select" type="select" placeholder="Search...">
            {showEntries.map((entries, index) => (
              <option key={index} onClick={() => handleShowEntries(entries)}>
                {entries}
              </option>
            ))}
          </select>
          Entries
        </div>
        <input
          className="search-bar"
          type="text"
          placeholder="Search..."
          name="searchBar"
          onChange={(e) => {
            handleSearch(e.target.value)
          }}
        ></input>
      </div>
      <table>
        <thead>
          <tr>
            {columns.map(({ label, accessor }) => {
              return (
                <th key={accessor} className="table-head-cell">
                  <span>{label}</span>
                  <div className="arrows">
                    <span
                      onClick={() => handleAscending(accessor)}
                      className={
                        order === true && accessor === selectedField // checks if the selected column is the same as the clicked column
                          ? "arrow-selected"
                          : ""
                      }
                    >
                      &#9650;
                    </span>
                    <span
                      onClick={() => handleDescending(accessor)}
                      className={
                        order === false && accessor === selectedField // checks if the selected column is the same as the clicked column
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
        <tbody className="table-body">
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

      <div className="entries-pages">
        <span>{allEntries ? page + 1 + "/" + allEntries.length : "1/1"}</span>
        <span className="entries-total">
          Showing
          {" " + previousEntries + " "}
          to
          {" " + currentEntries + " "}
          of {employeeList.length} entries
        </span>

        <div>
          <button onClick={handlePreviousPage}>&#8592;</button>
          <button onClick={handleNextPage}>&#8594;</button>
        </div>
      </div>
    </>
  )
}

export default EmployeeListTable
