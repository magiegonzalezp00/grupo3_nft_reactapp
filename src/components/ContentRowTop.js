import React from 'react';
import ContentRowCenter from './ContentRowCenter';
import ContentRowMovies from './ContentRowMovies';
import ProductTable from './ProductTable';

function ContentRowTop(props){
    return(
        <React.Fragment>
				{/*<!-- Content Row Top -->*/}
				<div className="container-fluid">
					<div className="d-sm-flex aligns-items-center justify-content-between mb-4">
						<h1 className="h3 mb-0 text-gray-800">I love NFT Dashboard</h1>
					</div>
				
					{/*<!-- Content Row Movies-->*/}
					<ContentRowMovies total={props.totalProducts} premium={props.totalPremium} mostPurchased={props.mostPurchased} lastAdded={props.lastAdded} lastDays={props.lastDays} totalUsers={props.totalUsers}/>
					<ContentRowCenter lastProduct={props.lastProduct}/>
					<ProductTable products={props.products}/>
	
				</div>
				{/*<!--End Content Row Top-->*/}

        </React.Fragment>
    )

}
export default ContentRowTop;