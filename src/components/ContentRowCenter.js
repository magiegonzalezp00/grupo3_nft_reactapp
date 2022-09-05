import React from 'react';
import LastProductInDb from './LastProductInDb';
import CategoriesInDb from './CategoriesInDb';

function ContentRowCenter(props){
    return (
        <div className="row">
            
            {/*<!-- Last Product in DB -->*/}
            <LastProductInDb product={props.lastProduct}/>
            {/*<!-- End content row last movie in Data Base -->*/}

            {/*<!-- Categories in DB -->*/}
            <CategoriesInDb />

        </div>
    )
}

export default ContentRowCenter;