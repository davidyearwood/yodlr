'use strict';

var _UserRowList = require('./UserRowList');

var _UserRowList2 = _interopRequireDefault(_UserRowList);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var UserTable = function UserTable(props) {
    return React.createElement(
        'table',
        null,
        React.createElement(
            'tbody',
            null,
            React.createElement(_UserRowList2.default, { users: props.users })
        )
    );
};