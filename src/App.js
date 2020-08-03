import React, { useState } from "react";

import TableFilter from "./components/TableFilter"
import FilterOrder from "./components/FilterOrder"
import EmployeeList from "./components/EmployeeList"

import employees from "./employees.json"

function App() {
  const [tableManager, setList] = useState( { list: employees, filter: "", order: "name" } )

  function updateFilter(filter){
    const filterList =  employees.filter( employee => employee.name.toLocaleLowerCase().indexOf(filter.toLocaleLowerCase())> -1)
    setList ({...tableManager, filter, list:filterList})
  }



  function updateOrder (order){
    const newOrderForList = tableManager.list.sort(function(a, b){
      return a[order] > b[order] ? 1 : -1 
    })
    setList ({...tableManager, order, list: newOrderForList })
  }

  return (
    <div class="row d-flex justify-content-center container">
        <h1 class="d-flex justify-content-center">Employee List</h1>
        <form>
          <TableFilter filter={tableManager.filter} updateFilter={updateFilter} />
          <FilterOrder order={tableManager.filter} updateOrder={updateOrder} />
        </form>

        <EmployeeList employees= {tableManager.list}/>

        
      
    </div>





  );
}

export default App;
