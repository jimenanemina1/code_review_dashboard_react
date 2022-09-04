import React from 'react';

function LastProductsDetail(props){
console.log(props);
const [DataProductDetail,setDataProductDetail] = React.useState([]);

    const fetchApiProductsDetail = () => {
        return new Promise((resolve, reject) => {
            return fetch(`http://localhost:3001/api/product/${props.id}`)
                .then(res => res.json())
                .then(res => resolve(res.imgPath))
                   .catch(err => reject(err));
        });
    }
   
    
    React.useEffect(() => {
        fetchApiProductsDetail()
            .then(imgPath => {
                setDataProductDetail(imgPath);
               })
            .catch(err => console.error(err));
            
    }, []);


const urlImg = 'http://'+DataProductDetail;
    return (
                        
            <div>
            <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{width: 60 +'rem'}} src= {urlImg} alt="Barizta "/>
             
            </div>                           
               
            )
    }
         

export default LastProductsDetail;