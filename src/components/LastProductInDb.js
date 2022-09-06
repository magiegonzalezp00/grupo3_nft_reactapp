import React from 'react';
import imagenFondo from '../assets/images/mandalorian.jpg';

function LastProductInDb(props){
    return(
        <div className="col-lg-6 mb-4">
            <div className="card shadow mb-4">
                {props.product &&
                <>
                <div className="card-header py-3">
                    <h5 className="m-0 font-weight-bold text-gray-800">{props.product?.name}</h5>
                </div>
                <div className="card-body">
                    <div className="text-center">
                        <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{width: 40 +'rem'}} src={`http://localhost:3000/images/productImg/${props.product?.image}`} alt=" Star Wars - Mandalorian "/>
                    </div>
                    <p>{props.product?.description}</p>
                    <a className="btn btn-danger" target="_blank" rel="nofollow" href={`http://localhost:3000/product/detail/${props.product?.id}`}>View product detail</a>
                </div>
                </>
                }
            </div>
        </div>
    )
}

export default LastProductInDb;