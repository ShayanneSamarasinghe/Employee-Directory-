import React from 'react'

function EmployeeList(){
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
            {props.employees.map(employee=>< TableRow ...employee /> )}
          <tr>
            <th scope="row">1</th>
            <td>Mark Jacob</td>
            <td>Downtown TO</td>
            <td>UI UX Junior Designer</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Jacob Daniel</td>
            <td>Ottawa</td>
            <td>Front-End Developer</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Daniel Singh</td>
            <td>Ottawa</td>
            <td>Senior Front-End Developer</td>   
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Singhe Bullar</td>
            <td>Kingston</td>
            <td>Back-End Developer</td>   
          </tr>
        </tbody>
      </table>
    )
}


export default EmployeeList;
