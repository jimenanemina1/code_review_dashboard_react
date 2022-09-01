import React from 'react';
import ChartRow from './ChartRow';

let tableRowsData = [
    {
        Name: 'Cafe Expreso',
        Precio: '123',
        Descuento: '5',
        Categories: 'cafe',
        
    },
    {
        Name: 'Maquina premium',
        Precio: '142',
        Descuento: '0',
        Categories: 'Maquina de cafe',
       
    },
    
]


function Chart (){
    return (
        /* <!-- DataTales Example --> */
        <div className="card shadow mb-4">
            <div className="card-body">
                <div className="table-responsive">
                    <table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>price</th>
                                <th>Discount</th>
                                <th>Génres</th>
                                
                            </tr>
                        </thead>
                        <tfoot>
                            <tr>
                                <th>Name</th>
                                <th>price</th>
                                <th>Discount</th>
                                <th>Génres</th>
                            </tr>
                        </tfoot>
                        <tbody>
                            {
                            tableRowsData.map( ( row , i) => {
                                return <ChartRow { ...row} key={i}/>
                            })
                            }

                        </tbody>
                    </table>
                </div>
            </div>
        </div>

    )
}

export default Chart;