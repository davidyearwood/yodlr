import React from 'react';

const Message = props => {
  return (
    <div className={props.containerClassName}>
        {props.children}
    </div>
  );  
};

Message.defaultProps = {
    containerClassName: 'message'
}

export default Message; 