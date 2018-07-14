import React from 'react';
const UserRow = props => {
    return (
        <tr>
            <td>{props.id}</td>
            <td>{props.email}</td>
            <td>{props.firstName}</td>
            <td>{props.lastName}</td>
            <td>{props.state}</td>
        </tr>
  );
};

export default UserRow; 