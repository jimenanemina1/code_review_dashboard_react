import React from 'react';


function ChartRow(props){
    return (
                <tr>
                    <td>{props.Name}</td>
                    <td>{props.Precio}</td>
                    <td>{props.Descuento}</td>
                    <td>{props.Categories}</td>
                </tr>
            )
    }
         

export default ChartRow;