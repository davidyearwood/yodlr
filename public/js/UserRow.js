"use strict";

var UserRow = function UserRow(props) {
    return React.createElement(
        "tr",
        null,
        React.createElement(
            "td",
            null,
            props.id
        ),
        React.createElement(
            "td",
            null,
            props.email
        ),
        React.createElement(
            "td",
            null,
            props.firstName
        ),
        React.createElement(
            "td",
            null,
            props.lastName
        ),
        React.createElement(
            "td",
            null,
            props.state
        )
    );
};