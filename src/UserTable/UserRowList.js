import React from 'react';
import UserRow from './UserRow';

const UserRowList = props => {
    let rows = props.users.map((user, index) => {
        return (
            <UserRow 
                key={index}
                id={user.id} 
                email={user.email}
                firstName={user.firstName}
                lastName={user.lastName}
                state={user.state}
            />
        );
    });
    
    return rows; 
};

export default UserRowList;