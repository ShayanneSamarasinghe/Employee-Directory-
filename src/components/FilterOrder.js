import React from 'react'

function FilterOrder (props){
    return(
        <div class="mb-3 row">
        <label for="inputPassword" class="col-sm-2 col-form-label">
          Filter
        </label>
        <div class="col-sm-10">
          <select class="form-select form-select-lg mb-3">
            <option value="name">Name</option>
            <option value="OfficeLocation">Office Location</option>
            <option value="Role">Role</option>
          </select>
        </div>
      </div>
    )
}



export default FilterOrder;

