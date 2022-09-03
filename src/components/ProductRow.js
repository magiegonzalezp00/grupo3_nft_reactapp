import React from 'react';


function ProductRow(props) {
    return (
        <tr>
            <td>
                {props.product.id}
            </td>
            <td>
                {props.product.name}
            </td>
            <td>
                {props.product.price}
            </td>
            <td>
                {props.product.autor}
            </td>
            <td>
                {props.product.category?.name}
            </td>
            
        </tr>
    )
}
export default ProductRow;