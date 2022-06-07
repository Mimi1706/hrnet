import "./CreateEmployeeForm.css"

const CreateEmployeeForm = () => {
  return (
    <form className="createEmployeeForm">
      <div className="formField">
        <label>First Name </label>
        <input type="text" />
      </div>

      <div className="formField">
        <label>First Name </label>
        <input type="text" />
      </div>

      <div className="formField">
        <label>Date of birth </label>
        <input type="date" />
      </div>

      <div className="formField">
        <label>Start date </label>
        <input type="date" />
      </div>

      <fieldset className="addressField">
        <legend>Address</legend>
        <div className="formField">
          <label>Street </label>
          <input type="text" />
        </div>

        <div className="formField">
          <label>City </label>
          <input type="text" />
        </div>

        <div className="formField">
          <label>State </label>
          <input type="text" />
        </div>

        <div className="formField">
          <label>Zip Code </label>
          <input type="number" />
        </div>
      </fieldset>

      <div className="formField">
        <label>Department </label>
        <select type="select">
          <option>Sales</option>
          <option>Marketing</option>
          <option>Engineering</option>
          <option>Human Resources</option>
          <option>Legal</option>
        </select>
      </div>

      <div class="line-break"></div>

      <input type="submit" value="Save" className="formSubmitBtn" />
    </form>
  )
}

export default CreateEmployeeForm
