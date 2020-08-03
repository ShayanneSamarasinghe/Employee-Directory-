import React from "react";
import logo from "./logo.svg";
import "./App.css";
import TableFilter from "./components/TableFilter"
import FilterOrder from "./components/FilterOrder"
import EmployeeList from "./components/EmployeeList"
import employees from "./employees.json"

function App() {
  return (
    <div class="row d-flex justify-content-center container">
      <h1 class="d-flex justify-content-center">Employee List</h1>
      <form>
        <TableFilter/>
        <FilterOrder/>
      </form>

      <EmployeeList employees= {employees}/>
      
    </div>
  );
}

export default App;
