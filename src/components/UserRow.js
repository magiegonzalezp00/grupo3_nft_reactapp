

import React from 'react';


function UserRow(props) {
    return (
        <tr>
            <td>
                {props.user.id}
            </td>
            <td>
                {props.user.name}
            </td>
            <td>
                {props.user.email}
            </td>
            <td>
                {props.user.roles_id}
            </td>
        </tr>
    )
}
export default UserRow;