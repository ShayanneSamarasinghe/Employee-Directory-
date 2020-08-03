import React from 'react'
import TableRow from "./TableRow"

function EmployeeList(props){
    return(
        <table class="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Office Location</th>
            <th scope="col">Role</th>
          </tr>
        </thead>
        <tbody>
            {props.employees.map(employee=>< TableRow {...employee} /> )}
        
        </tbody>
      </table>
    )
}


export default EmployeeList;
