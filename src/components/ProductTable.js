import React from "react";
import ProductRow from "./ProductRow";

function ProductListTable({ products }) {
    return (
        <div className="table-responsive">
            <table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Nombre</th>
                        <th>Precio</th>
                        <th>Autor</th>
                        <th>Categoría</th>
                    </tr>
                </thead>
                <tfoot>
                    <tr>

                    </tr>
                </tfoot>
                <tbody>
                    {
                        products?.map((product, index) =>
                            <ProductRow product={product} key={index} />
                        )
                    }
                </tbody>
                
            </table>
            
        </div>
    )
}

export default ProductListTable;