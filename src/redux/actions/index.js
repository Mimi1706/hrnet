export const save = (employee) => {
  return {
    type: "SAVE_NEW_EMPLOYEE",
    payload: { ...employee },
  }
}
