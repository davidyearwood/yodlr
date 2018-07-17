import React from 'react';
import UserHeader from './UserHeader';

const UserHeaderList = props => {
    const FIRST_ITEM = 0; 
    
    let headers = Object.keys(props.users[FIRST_ITEM]); 
    let headerRow = headers.map((header, index) => {
       return <UserHeader header={header} key={index}/> 
    });
    
    return <tr>{headerRow}</tr>; 
};

export default UserHeaderList;