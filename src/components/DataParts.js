import React from 'react';

function DataParts() {
	const [Users,setUsers] = React.useState([]);

	// Function para traer datos de la api de omdb
	const fetchApiUsers = () => {
		return new Promise((resolve, reject) => {
			return fetch('http://localhost:3001/api/users/')
				.then(res => res.json())
				.then(res => resolve(res.Search))
				.catch(err => reject(err));
		});
	}

	React.useEffect(() => {
		fetchApiUsers()
			.then(data => {
				setUsers(data);
			})
			.catch(err => console.error(err));
	}, []);
   
	return (
      
        // Users.length > 0 && Users.map((Users, i) => {
        //     return (
        //    <div className="container-fluid">
		// 	{

		// 	<div className="alert alert-danger text-center my-4 fs-2">User.id</div>
		// 	}
		//    </div>
        //    	)
        // })
        <div className="alert alert-danger text-center my-4 fs-2">hola</div>
	)
}

export default DataParts;