import React from 'react';
import imagenFondo from '../assets/images/gifs-cafe-5.webp';

function NotFound(){
    return(
        <div className="col-md-4 mb-12">
         <br></br>
         <br></br>
         <center>
            <h3>404 Página no encontrada,  Prepárate un buen café e intenta de nuevo</h3>
            <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{width: 50 +'rem'}} src={imagenFondo} alt=" Barizta"/>
        </center>
        </div>
        
    )
}


export default NotFound;