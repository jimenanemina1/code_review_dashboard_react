import React from 'react';
import CategoriesInDb from './CategoriesInDb';
import LastProducts from './LastProducts';

function ContentRowCenter(){
    return (
        <div className="row">
            <CategoriesInDb />
            <LastProducts />
        </div>
    )
}

export default ContentRowCenter;