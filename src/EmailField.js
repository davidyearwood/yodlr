import React from 'react';
import PropTypes from 'prop-types';

const EmailField = props => {
  return (
    <div className={props.containerClassName}>
        <label htmlFor={props.id}>{props.labelText}</label> 
        <input 
            type="email"
            id={props.id}
            value={props.value}
            onChange={props.onChange}
            onBlur={props.onBlur}
        />
    </div>
    );   
};

EmailField.defaultProps = {
  containerClassName: 'text-field',
  labelClassName: 'text-field__label', 
  inputClassName: 'text-field__input',
};

EmailField.propTypes = {
  id: PropTypes.string.isRequired, 
  onChange: PropTypes.func.isRequired, 
  value: PropTypes.string.isRequired
};

export default EmailField; 