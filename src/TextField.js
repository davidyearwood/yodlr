import React from 'react';
import PropTypes from 'prop-types';

const TextField = props => {
  return (
    <div className={props.containerClassName}>
        <label htmlFor={props.id}>{props.labelText}</label> 
        <input 
            type="text"
            id={props.id}
            value={props.value}
            onChange={props.onChange}
            onBlur={props.onBlur}
        />
    </div>
    );   
};

TextField.defaultProps = {
  containerClassName: 'text-field',
  labelClassName: 'text-field__label', 
  inputClassName: 'text-field__input',
};

TextField.propTypes = {
  id: PropTypes.string.isRequired, 
  onChange: PropTypes.func.isRequired, 
  value: PropTypes.string.isRequired
};

export default TextField; 