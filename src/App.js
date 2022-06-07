import "./App.css"
import { BrowserRouter, Routes, Route } from "react-router-dom"

import CreateEmployee from "./pages/CreateEmployee/CreateEmployee"
import EmployeeList from "./pages/EmployeeList/EmployeeList"
import Header from "./components/Header/Header"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<CreateEmployee />}></Route>
          <Route path="/employee-list" element={<EmployeeList />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
