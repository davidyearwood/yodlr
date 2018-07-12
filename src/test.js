import React from 'react';
import ReactDOM  from 'react-dom';
import UserTable from './UserTable';

var users = {
  "data": {
    "1" : { "id": 1, "email": "kyle@getyodlr.com", "firstName": "Kyle", "lastName": "White", "state": "active"},
    "2" : { "id": 2, "email": "jane@getyodlr.com", "firstName": "Jane", "lastName": "Stone", "state": "active"},
    "3" : { "id": 3, "email": "lilly@getyodlr.com", "firstName": "Lilly", "lastName": "Smith", "state": "pending"},
    "4" : { "id": 4, "email": "fred@getyodlr.com", "firstName": "Fred", "lastName": "Miles", "state": "pending"},
    "5" : { "id": 5, "email": "alex@getyodlr.com", "firstName": "Alexandra", "lastName": "Betts", "state": "pending"}
  }
};

var usersList = Object.keys(users.data).map(i => users.data[i]);

ReactDOM.render(<UserTable />, document.getElementById('root'));