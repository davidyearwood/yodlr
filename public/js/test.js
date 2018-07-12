"use strict";

var _UserTable = require("./UserTable");

var _UserTable2 = _interopRequireDefault(_UserTable);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var users = [{ "id": 1, "email": "kyle@getyodlr.com", "firstName": "Kyle", "lastName": "White", "state": "active" }, { "id": 2, "email": "jane@getyodlr.com", "firstName": "Jane", "lastName": "Stone", "state": "active" }, { "id": 3, "email": "lilly@getyodlr.com", "firstName": "Lilly", "lastName": "Smith", "state": "pending" }, { "id": 4, "email": "fred@getyodlr.com", "firstName": "Fred", "lastName": "Miles", "state": "pending" }, { "id": 5, "email": "alex@getyodlr.com", "firstName": "Alexandra", "lastName": "Betts", "state": "pending" }];

ReactDOM.render(React.createElement(_UserTable2.default, { users: users }), document.getElementById('root'));