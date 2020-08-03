import React from 'react'

function FilterOrder (props){
    return(
        <div class="mb-3 row">
        <label for="inputPassword" class="col-sm-2 col-form-label">
          Filter
        </label>
        <div class="col-sm-10">
          <select class="form-select form-select-lg mb-3">
            <option selected>Name</option>
            <option value="1">Office Location</option>
            <option value="2">Role</option>
          </select>
        </div>
      </div>
    )
}



export default FilterOrder;

