import React from 'react';
import MostSelledProductsInDb from './MostSelledProductsInDb';
import CategoriesInDb from './CategoriesInDb';

function ContentRowCenter(){
    return (
        <div className="row">
            
          
            <MostSelledProductsInDb />
            <CategoriesInDb />

        </div>
    )
}

export default ContentRowCenter;