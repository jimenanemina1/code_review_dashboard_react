import React from 'react';
import ChartRow from './ChartRow';

function Chart (){
const [DataProduct,setDataProduct] = React.useState([]);

// Function para traer datos de la api de omdb productos
const fetchApiProducts = () => {
    return new Promise((resolve, reject) => {
        return fetch('http://localhost:3001/api/product/')
            .then(res => res.json())
            .then(res => resolve(res.products))
               .catch(err => reject(err));
    });
}

React.useEffect(() => {
    fetchApiProducts()
        .then(products => {
            setDataProduct(products);
           })
        .catch(err => console.error(err));
        
}, []);

console.log(DataProduct);


// let tableRowsData = [
//     {
//         Name: 'Cafe Expreso',
//         Precio: '123',
//         Descuento: '5'
      
        
//     },
//     {
//         Name: 'Maquina premium',
//         Precio: '142',
//         Descuento: '0'
       
       
//     },
    
// ]



    return (
        /* <!-- DataTales Example --> */
        <div className="card shadow mb-4">
            <div className="card-body">
                <div className="table-responsive">
                    <table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Nombre</th>
                                <th>Descripción</th>
                                                           
                                
                            </tr>
                        </thead>
                        <tfoot>
                            <tr>
                                <th>Id</th>
                                <th>Nombre</th>
                                <th>Descripción</th>
                                
                               
                            </tr>
                        </tfoot>
                        <tbody>
                            {
                            DataProduct.map( ( row , i) => {
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