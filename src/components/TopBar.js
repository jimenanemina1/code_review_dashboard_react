import React from 'react';

function TopBar(){
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
					<marquee behavior="scroll" direction="left"><h3>Bienvenidos!!! Code Review  .</h3></marquee>
				</nav>
				{/*<!-- End of Topbar -->*/}
				
        </React.Fragment>
    )
}
export default TopBar;