import React from 'react';
import Marquee from "react-fast-marquee";

function TopBar(){

const [dolar, setDolar] = React.useState([]);
const [Coffe, setCoffe] = React.useState([]);


// Function para traer datos de la api de omdb
const fetchApiDolar = () => {
	return new Promise((resolve, reject) => {
		return fetch('https://www.dolarsi.com/api/api.php?type=valoresprincipales')
			.then(res => res.json())
			.then(res => resolve(res[1].casa.venta))
			.catch(err => reject(err));
	});
}

React.useEffect(() => {
	fetchApiDolar()
		.then(casa => {
			setDolar(casa);
		})
		.catch(err => console.error(err));
}, []);

console.log(dolar);

const fetchApiCoffe = () => {
	return new Promise((resolve, reject) => {
		return fetch('https://ratesapi.dailyforex.com/currencies/latest/COFFEE_C')
			.then(res => res.json())
			.then(res => resolve(res.rate))
			.catch(err => reject(err));
	});
}

React.useEffect(() => {
	fetchApiCoffe()
		.then(rate => {
			setCoffe(rate);
		})
		.catch(err => console.error(err));
}, []);

console.log(Coffe);


    return(
        <React.Fragment>
				{/*<!-- Topbar -->*/}
				<nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">

					{/*<!-- Sidebar Toggle (Topbar) -->*/}
					<button id="sidebarToggleTop" className="btn btn-link d-md-none rounded-circle mr-3">
						<i className="fa fa-bars"></i>
					</button>

					{/*<!-- Topbar Navbar -->*/}
					<ul className="navbar-nav ml-auto">


					</ul>
					<Marquee>
					<h3>Bienvenidos!!! Code Review... Indicadores Dolar Blue Venta {dolar} - Cafe {Coffe}</h3>
					</Marquee>
					{/* <marquee behavior="scroll" direction="left"><h3>Bienvenidos!!! Code Review... Indicadores Dolar Blue Venta {dolar} - Cafe {Coffe}</h3></marquee> */}
				</nav>
				{/*<!-- End of Topbar -->*/}
				
        </React.Fragment>
    )
}
export default TopBar;