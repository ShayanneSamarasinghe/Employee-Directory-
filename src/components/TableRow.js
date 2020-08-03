import React from 'react'

function TableRow(props){
    return(
        <tr>
            <th scope="row">{props.id}</th>
            <td>{props.name}</td>
            <td>{props.officeLocation}</td>
            <td>{props.role}</td>
        </tr>
    )
}

export default TableRow;
