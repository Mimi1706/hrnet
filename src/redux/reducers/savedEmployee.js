const initialState = {
  employeeList: [],
}

const savedEmployees = (state = initialState, action) => {
  if (action.type === "SAVE_NEW_EMPLOYEE") {
    return {
      employeeList: [action.payload, ...state.employeeList],
    }
  }
  return state
}

export default savedEmployees
