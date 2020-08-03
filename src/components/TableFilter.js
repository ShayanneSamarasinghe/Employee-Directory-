import React from 'react'

function TableFilter (props){
    return(
        <div class="mb-3 row">
          <label for="name" class="col-sm-2 col-form-label">
            Name
          </label>
          <div class="col-sm-10">
            <input type="text" class="form-control" id="name" value="George" />
          </div>
        </div>


    )
}

export default TableFilter