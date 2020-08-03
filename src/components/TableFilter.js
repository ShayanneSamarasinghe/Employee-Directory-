import React from 'react'

function TableFilter (props){
   function handleInputChange (event){
    const { name, value} = event.target;
    console.log(`[handleInputChange] name ${name} value ${value}`)


    props.updateFilter (value)
  }


    return(
        <div class="mb-3 row">
          <label for="name" class="col-sm-2 col-form-label">
            Name
          </label>
          <div class="col-sm-10">
            <input onChange={handleInputChange} type="text" class="form-control" id="name" value={props.filter} />
          </div>
        </div>


    )
}

export default TableFilter