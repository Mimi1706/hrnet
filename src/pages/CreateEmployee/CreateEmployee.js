import "./CreateEmployee.css"

import CreateEmployeeForm from "../../components/CreateEmployeeForm/CreateEmployeeForm"

/**
 * Create employee list page
 * @returns {JSX}
 */

const CreateEmployee = () => {
  return (
    <main className="createEmployeeMain">
      <h1>Create Employee</h1>
      <CreateEmployeeForm />
    </main>
  )
}

export default CreateEmployee
