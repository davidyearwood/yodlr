import React from 'react';

// The name of the input 
// list of classes you want associated with it 
// what type of validation you want to be used on this 
const TextInput = props => {
    return (
        <div>
            <label htmlFor={props.name}>{props.labelText}</label>  
            <input type="text" />
        </div>
    );
}

export default TextInput; 