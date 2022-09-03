import React from 'react';
import image from '../assets/images/barizta-logo.png';
import ContentWrapper from './ContentWrapper';
import CategoriesInDb from './CategoriesInDb';
import LastProducts from './LastProducts';
import Chart from './Chart';
import ContentRowProducts from './ContentRowProducts';
import NotFound from './NotFound';
import {Link, Route, Switch} from 'react-router-dom';



function SideBar(){
    return(
        <React.Fragment>
            {/*<!-- Sidebar -->*/}
            <ul className="navbar-nav sidebar sidebar-dark accordion" id="accordionSidebar" style={{ backgroundColor:"#900e1e" }} >

                {/*<!-- Sidebar - Brand -->*/}
                <a className="sidebar-brand d-flex align-items-center justify-content-center" href="/">
                    <div className="sidebar-brand-icon">
                        <img className="w-100" src={image} alt="Barizta"/>
                    </div>
                </a>

                {/*<!-- Divider -->*/}
                <hr className="sidebar-divider my-0"/>

                {/*<!-- Nav Item - Dashboard -->*/}
                <li className="nav-item active">
                    <Link className="nav-link" to="/">
                        <i className="fas fa-fw fa-tachometer-alt"></i>
                        <span>Dashboard - Barizta</span></Link>
                </li>

                {/*<!-- Divider -->*/}
                <hr className="sidebar-divider"/>

                {/*<!-- Heading -->*/}
                <div className="sidebar-heading">Actions</div>

                {/*<!-- Nav Item - Pages -->*/}
                <li className="nav-item">
                <Link className="nav-link" to="/CategoriesInDb">
                        <i className="fas fa-fw fa-folder"></i>
                        <span>Categorias</span>
                    </Link>
                </li>

                {/*<!-- Nav Item - Charts -->*/}
                <li className="nav-item">
                    <Link className="nav-link" to="/LastProducts">
                        <i className="fas fa-fw fa-chart-area"></i>
                        <span>Último Producto</span></Link>
                </li>

                {/*<!-- Nav Item - Tables -->*/}
                <li className="nav-item nav-link">
                <Link className="nav-link" to="/ContentRowProducts">
                        <i className="fas fa-fw fa-table"></i>
                        <span>Totales</span></Link>
                </li>
               

                

                {/*<!-- Divider -->*/}
                <hr className="sidebar-divider d-none d-md-block"/>
            </ul>

            <Switch>
                <Route exact path="/">
                    <ContentWrapper />
                </Route>
                <Route path="/CategoriesInDb">
                    <CategoriesInDb />
                </Route>
                <Route path="/LastProducts">
                    <LastProducts />
                </Route>
                <Route path="/ContentRowProducts">
                    <ContentRowProducts />
                </Route>
                <Route path="/Chart">
                    <Chart />
                </Route>
                <Route component={NotFound} />
            </Switch>
           
        </React.Fragment>
    )
}
export default SideBar;