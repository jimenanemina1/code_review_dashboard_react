import React from "react";
import LastProductsDetail from "./LastProductsDetail";

function LastProducts() {
const [DataProducts,setDataProducts] = React.useState([]);


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
            setDataProducts(products);
             })
          .catch(err => console.error(err));
          
  }, []);
  
 
  return (
    <div className="col-lg-6 mb-4">
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h5 className="m-0 font-weight-bold text-gray-800">Último Producto Agregado</h5>
                </div>
                <div className="card-body">
                <div className="row">{
                    DataProducts.map( ( row , i) => {
                    if(i == (DataProducts.length-1)){  
                    return <div className="">
                      <div className="">
                           <div className="card-body">< LastProductsDetail { ...row} key={i}/>{row.description}</div>
                      </div>
                    </div>
                    }
                    })}
                    
                  </div>
                 
                <div> 
                    <a className="btn btn-danger" target="_blank" rel="nofollow" href="/Chart">Listado de Productos</a>
                </div>
                </div>
            </div>
         </div>

  );
}

export default LastProducts;
