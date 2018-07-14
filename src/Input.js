import React from 'react'; 
import arrayToString from './arrayToString'; 

const Input = props => {
    return (
      <div className={props.container}>
        <label htmlFor={props.name}>{props.labelText}</label>
        <input 
          name={props.name} 
          type={props.type} 
          id={props.name} 
          className={arrayToString(props.className)} 
          value={props.usersInput} 
          onChange={props.onChange} 
          onBlur={props.onBlur}
        />
      </div>  
    );    
}


Input.defaultProps = {
    container: 'input-container',
    className: '', 
    type: 'text',
};

export default Input; 