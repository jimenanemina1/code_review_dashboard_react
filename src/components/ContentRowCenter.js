import React from 'react';
import CategoriesInDb from './CategoriesInDb';
import LastProducts from './LastProducts';

function ContentRowCenter(){
    return (
        <div className="row">
            
            <LastProducts />
            <CategoriesInDb />

        </div>
    )
}

export default ContentRowCenter;