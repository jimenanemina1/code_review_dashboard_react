import React from "react";
import CategoriesinDbRow from './CategoriesinDbRow';


function CategoriesInDb() {
const [DataCategory,setDataCategory] = React.useState([]);


  // Function para traer datos de la api de omdb productos
  const fetchApiCategories = () => {
      return new Promise((resolve, reject) => {
          return fetch('http://localhost:3001/api/category/')
              .then(res => res.json())
              .then(res => resolve(res.categories))
                 .catch(err => reject(err));
      });
  }
  
  React.useEffect(() => {
      fetchApiCategories()
          .then(categories => {
            setDataCategory(categories);
             })
          .catch(err => console.error(err));
          
  }, []);
  
  console.log(DataCategory);
  
  return (
    <div className="col-lg-6 mb-4">
      <div className="card shadow mb-4">
        <div className="card-header py-3">
          <h5 className="m-0 font-weight-bold text-gray-800">
            Categorias X cantidades de productos asocidos
          </h5>
        </div>
        <div className="card-body">
          <div className="row">{
          DataCategory.map( ( row , i) => {
          return <div className="col-lg-6 mb-4">
            <div className="card bg-dark text-white shadow">
              <center>
              <div className="card-body" style={{ backgroundColor:"#4a6554" }}>{row.name}<CategoriesinDbRow { ...row} key={i}/></div>
              </center>
            </div>
          </div>
          })}
           
           </div>
        </div>
      </div>
    </div>

  );
}

export default CategoriesInDb;
