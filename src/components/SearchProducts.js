import React from 'react';

function SearchProducts() {
	const [movies, setMovies] = React.useState([]);

	// crear estado para keyword
	// crear funcion para el onSubmit del formulario
	// en el onchange del input van a a llamar setKeyword

	const keyword = 'Cafe';

	// Credenciales de API
	const apiKey = '8de8f06fR'; // Intenta poner cualquier cosa antes para probar

	// Function para traer datos de la api de omdb
	const fetchApiMovies = () => {
		return new Promise((resolve, reject) => {
			return fetch(`https://www.omdbapi.com/?s=${keyword}&apikey=${apiKey}`)
				.then(res => res.json())
				.then(res => resolve(res.Search))
				.catch(err => reject(err));
		});
	}

	React.useEffect(() => {
		fetchApiMovies()
			.then(data => {
				setMovies(data);
			})
			.catch(err => console.error(err));
	}, []);

	return (
		<div className="container-fluid">
			{
				apiKey !== '' ?
					<>
						<div className="row my-4">
							<div className="col-12 col-md-6">
								{/* Buscador */}
								<form method="GET">
									<div className="form-group">
										<label htmlFor="">Buscar por Nombre:</label>
										<input type="text" className="form-control" />
									</div>
									<button className="btn btn-info">Search</button>
								</form>
							</div>
						</div>
						<div className="row">
							<div className="col-12">
								<h2>Buscar Producto: {keyword}</h2>
							</div>
							{/* Listado de películas */}
							{
								movies.length > 0 && movies.map((movie, i) => {
									return (
										<div className="col-sm-6 col-md-3 my-4" key={i}>
											<div className="card shadow mb-4">
												<div className="card-header py-3">
													<h5 className="m-0 font-weight-bold text-gray-800">{movie.Title}</h5>
												</div>
												<div className="card-body">
													<div className="text-center">
														<img
															className="img-fluid px-3 px-sm-4 mt-3 mb-4"
															src={movie.Poster}
															alt={movie.Title}
															style={{ width: '90%', height: '400px', objectFit: 'cover' }}
														/>
													</div>
													<p>{movie.Year}</p>
												</div>
											</div>
										</div>
									)
								})
							}
						</div>
						{movies.length === 0 && <div className="alert alert-warning text-center">No se encontraron películas</div>}
					</>
					:
					<div className="alert alert-danger text-center my-4 fs-2">Eyyyy... ¿PUSISTE TU APIKEY?</div>
			}
		</div>
	)
}

export default SearchProducts;