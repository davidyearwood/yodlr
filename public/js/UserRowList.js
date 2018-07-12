'use strict';

var _UserRow = require('./UserRow');

var _UserRow2 = _interopRequireDefault(_UserRow);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var UserRowList = function UserRowList(props) {
    var rows = props.users.map(function (user) {
        return React.createElement(_UserRow2.default, {
            id: user.id,
            email: user.email,
            firstName: user.firstName,
            lastName: user.lastName,
            state: user.state
        });
    });
};