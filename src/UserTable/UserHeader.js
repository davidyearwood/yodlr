import React from 'react';
import PropTypes from 'prop-types';

const UserHeader = props => <th>{props.header}</th>;

UserHeader.propTypes = {
  header: PropTypes.string.isRequired  
};

export default UserHeader; 
