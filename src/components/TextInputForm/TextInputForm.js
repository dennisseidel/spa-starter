import React from 'react';

const input = (props) => {
  return (
    <div className="field">
      <label className="label">{props.name}</label>
      <div className="control">
        <input className="input" type="text" placeholder={props.placeholder} {...props}/>
      </div>
    </div>
);
}

export default input; 