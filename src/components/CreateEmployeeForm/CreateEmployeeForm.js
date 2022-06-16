import { useState } from "react"
import "./CreateEmployeeForm.css"

import { useDispatch } from "react-redux"
import { save } from "../../redux/actions/index"

const CreateEmployeeForm = () => {
  const dispatch = useDispatch()
  const [modalDisplay, setModalDisplay] = useState(false)

  const [employee, setEmployee] = useState({
    firstName: "",
    lastName: "",
    dateOfBirth: "",
    startDate: "",
    street: "",
    city: "",
    state: "",
    zipCode: "",
    department: "",
  })

  const handleInput = (e) => {
    setEmployee({ ...employee, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    e.target.reset() // Clear the form
    dispatch(save(employee))
    window.scrollTo(0, 0) // Return to the top of the page
    setModalDisplay(true) // Display the success modal
  }

  return (
    <>
      <div className={modalDisplay === true ? "modal-window" : "hidden"}>
        <span>Employee successfully created.</span>
        <button onClick={() => setModalDisplay(false)}>Close</button>
      </div>

      <form className="create-employee-form" onSubmit={handleSubmit}>
        <div className="form-field">
          <label>First Name </label>
          <input type="text" name="firstName" onChange={handleInput} required />
        </div>

        <div className="form-field">
          <label>Last Name </label>
          <input type="text" name="lastName" onChange={handleInput} required />
        </div>

        <div className="form-field">
          <label>Date of birth </label>
          <input type="date" name="dateOfBirth" onChange={handleInput} />
        </div>

        <div className="form-field">
          <label>Start date </label>
          <input type="date" name="startDate" onChange={handleInput} />
        </div>

        <fieldset className="addressField">
          <legend>Address</legend>
          <div className="form-field">
            <label>Street </label>
            <input type="text" name="street" onChange={handleInput} />
          </div>

          <div className="form-field">
            <label>City </label>
            <input type="text" name="city" onChange={handleInput} />
          </div>

          <div className="form-field">
            <label>State </label>
            <select
              type="select"
              name="state"
              defaultValue=""
              onChange={handleInput}
            >
              <option disabled value="">
                Please Select
              </option>
              <option value="AL">Alabama</option>
              <option value="AK">Alaska</option>
              <option value="AS">American Samoa</option>
              <option value="AZ">Arizona</option>
              <option value="AR">Arkansas</option>
              <option value="CA">California</option>
              <option value="CO">Colorado</option>
              <option value="CT">Connecticut</option>
              <option value="DE">Delaware</option>
              <option value="DC">District Of Columbia</option>
              <option value="FM">Federated States Of Micronesia</option>
              <option value="FL">Florida</option>
              <option value="GA">Georgia</option>
              <option value="GU">Guam</option>
              <option value="HI">Hawaii</option>
              <option value="ID">Idaho</option>
              <option value="IL">Illinois</option>
              <option value="IN">Indiana</option>
              <option value="IA">Iowa</option>
              <option value="KS">Kansas</option>
              <option value="KY">Kentucky</option>
              <option value="LA">Louisiana</option>
              <option value="ME">Maine</option>
              <option value="MH">Marshall Islands</option>
              <option value="MD">Maryland</option>
              <option value="MA">Massachusetts</option>
              <option value="MI">Michigan</option>
              <option value="MN">Minnesota</option>
              <option value="MS">Mississippi</option>
              <option value="MO">Missouri</option>
              <option value="MT">Montana</option>
              <option value="NE">Nebraska</option>
              <option value="NV">Nevada</option>
              <option value="NH">New Hampshire</option>
              <option value="NJ">New Jersey</option>
              <option value="NM">New Mexico</option>
              <option value="NY">New York</option>
              <option value="NC">North Carolina</option>
              <option value="ND">North Dakota</option>
              <option value="MP">Northern Mariana Islands</option>
              <option value="OH">Ohio</option>
              <option value="OK">Oklahoma</option>
              <option value="OR">Oregon</option>
              <option value="PW">Palau</option>
              <option value="PA">Pennsylvania</option>
              <option value="PR">Puerto Rico</option>
              <option value="RI">Rhode Island</option>
              <option value="SC">South Carolina</option>
              <option value="SD">South Dakota</option>
              <option value="TN">Tennessee</option>
              <option value="TX">Texas</option>
              <option value="UT">Utah</option>
              <option value="VT">Vermont</option>
              <option value="VI">Virgin Islands</option>
              <option value="VA">Virginia</option>
              <option value="WA">Washington</option>
              <option value="WV">West Virginia</option>
              <option value="WI">Wisconsin</option>
              <option value="WY">Wyoming</option>
            </select>
          </div>

          <div className="form-field">
            <label>Zip Code </label>
            <input type="number" name="zipCode" onChange={handleInput} />
          </div>
        </fieldset>
        <div className="form-field">
          <label>Department </label>
          <select
            type="select"
            name="department"
            defaultValue=""
            onChange={handleInput}
          >
            <option disabled value="">
              Please Select
            </option>
            <option>Sales</option>
            <option>Marketing</option>
            <option>Engineering</option>
            <option>Human Resources</option>
            <option>Legal</option>
          </select>
        </div>

        <div className="line-break"></div>

        <input type="submit" value="Save" className="form-submit-btn" />
      </form>
    </>
  )
}

export default CreateEmployeeForm
