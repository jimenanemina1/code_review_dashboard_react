import React from 'react';
import SmallCard from './SmallCard';

//import DataParts from './DataParts';

/*  Cada set de datos es un objeto literal */

	// Function para traer datos de la api de omdb
  
// Function para traer datos de la api de omdb





function ContentRowProducts(){

    const [CountUser,setCountUser] = React.useState([]);
    const [CountProducts,setCountProducts] = React.useState([]);
    const [CountOrders,setCountOrders] = React.useState([]);
    const [AvgOrders,setAvgOrders] = React.useState([]);
   
   
	// Function para traer datos de la api de omdb users
	const fetchApiUsers = () => {
		return new Promise((resolve, reject) => {
			return fetch('http://localhost:3001/api/users/')
				.then(res => res.json())
				.then(res => resolve(res.count))
               	.catch(err => reject(err));
		});
	}

	React.useEffect(() => {
		fetchApiUsers()
			.then(count => {
				setCountUser(count);
   			})
			.catch(err => console.error(err));
            
	}, []);


// Function para traer datos de la api de omdb productos
const fetchApiProducts = () => {
    return new Promise((resolve, reject) => {
        return fetch('http://localhost:3001/api/products/')
            .then(res => res.json())
            .then(res => resolve(res.count))
               .catch(err => reject(err));
    });
}

React.useEffect(() => {
    fetchApiProducts()
        .then(count => {
            setCountProducts(count);
           })
        .catch(err => console.error(err));
        
}, []);

// Function para traer datos de la api de omdb orders
const fetchApiOrders = () => {
    return new Promise((resolve, reject) => {
        return fetch('http://localhost:3001/api/orders/')
            .then(res => res.json())
            .then(res => resolve(res.count))
            .catch(err => reject(err)); 
    });
}

React.useEffect(() => {
    fetchApiOrders()
        .then(count => {
            setCountOrders(count);            
           })
         .catch(err => console.error(err));
        
}, []);

const fetchApiOrdersAvg = () => {
    return new Promise((resolve, reject) => {
        return fetch('http://localhost:3001/api/orders/')
            .then(res => res.json())
            .then(res => resolve(res.totalRevenue))
            .catch(err => reject(err)); 
    });
}

React.useEffect(() => {
    fetchApiOrdersAvg()
        .then(count => {
            setAvgOrders(count);            
           })
         .catch(err => console.error(err));
        
}, []);



//const ventas = CountOrders.split(',');
console.log(CountOrders);
    let salesInDB = {
        title: 'Total Orders',
        color: 'primary', 
        cuantity: CountOrders,
        icon: 'fa-clipboard-list'
    }
    
    
    
    let totalProducts = {
        title:' Total Products', 
        color:'success', 
        cuantity: CountProducts,
        icon:'fa-award'
    }
    

    let registerUsers = {
        title:'Registered users' ,
        color:'warning',
        cuantity:CountUser,
        icon:'fa-user-check'
    }
    
    let salesAvg = {
        title:'sales avg' ,
        color:'warning',
        cuantity:AvgOrders,
        icon:'fa-user-check'
    }
    let cartProps = [salesInDB,totalProducts, registerUsers, salesAvg];
    return (
    
        <div className="row">
            
            {cartProps.map( (product, i) => {

                return <SmallCard {...product} key={i}/>
            
            })}

        </div>
    )
}


export default ContentRowProducts;