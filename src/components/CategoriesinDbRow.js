import React from 'react';

function CategoriesinDbRow(props){
console.log(props);
const [DataCategoryDetail,setDataCategoryDetail] = React.useState([]);

    const fetchApiCategoriesDetail = () => {
        return new Promise((resolve, reject) => {
            return fetch(`http://localhost:3001/api/category/${props.id}`)
                .then(res => res.json())
                .then(res => resolve(res.productsTotal))
                   .catch(err => reject(err));
        });
    }
   
    
    React.useEffect(() => {
      fetchApiCategoriesDetail()
            .then(productsTotal => {
              setDataCategoryDetail(productsTotal);
               })
            .catch(err => console.error(err));
            
    }, []);
console.log(DataCategoryDetail);
    return (
               
            <h5>{DataCategoryDetail}</h5>
                                       
               
            )
    }
         

export default CategoriesinDbRow;