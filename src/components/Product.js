import React from "react";
import ContentRowTop from "./ContentRowTop";
import ProductTable from "./ProductTable";


class Product extends React.Component {

    state = {
        products: [],
        totalProducts: undefined,
        lastProductInDb: null,
        users: [],
        totalUsers: undefined

    }
    async componentDidMount() {
        try {
            let productsfetch = await fetch('http://localhost:3000/api/products')
            let products = await productsfetch.json()
            let usersfetch = await fetch('http://localhost:3000/api/users')
            let users = await usersfetch.json()
            
            
            this.setState({
                products: products.data,
                totalProducts: products.meta.total,
                lastProductInDb: products.data[products.data.length - 1],
                users: users.data,
                totalUsers: users.meta.total

            })

        } catch (error) {
            console.log(error)

        }
    }


    render() {
        const { products, totalProducts, lastProductInDb, totalUsers} = this.state;
        return (
            <React.Fragment>
                <div className="container-fluid">
                    <div className="d-sm-flex aligns-items-center justify-content-between mb-4">
                        <h1 className="h3 mb-0 text-gray-800">App Dashboard</h1>
                    </div>

                    <ContentRowTop totalProducts={totalProducts} totalUsers={totalUsers} />

                    <div className="row">
                        <div className="col-lg-5 ml-7 mb-7">
                            <div className="card shadow mb-4">
                                <div className="card-header py-1">
                                    <h4>Ultimo producto creado</h4>
                                    <h5 className="m-0 font-weight-bold text-gray-800">{lastProductInDb?.name}</h5>
                                </div>
                                <div className="card-body">
                                    <div className="text-center">
                                        <img className="img-fluid px-3 px-sm-4 mt-3 mb-0" style={{ width: 15 + 'rem' }} alt=" Ultimo Producto " />
                                    </div>
                                    <p>{lastProductInDb?.description}</p>
                                    
                                    <a className="btn btn-danger" target="_blank" rel="nofollow" href={`http://localhost:3003/product/${lastProductInDb?.id}/detail`}>Ver el producto en detalle</a>
                                </div>
                            </div>
                        </div>
                        

                    </div>

                    
                </div>

            </React.Fragment>
        )
    }
}

export default Product;