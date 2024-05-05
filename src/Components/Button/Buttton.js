import React from 'react';
import classes from './Button.module.css';

function Button(props) {
  let className = classes.main;

  if (props.index === props.activeTabIndex) {
    className += ` ${classes.active}`;
  }

  return (
    <div>
      <div className={className} onClick={() => props.onClick(props.index)}>
        {props.src && <img src={props.src} alt={props.alt} />}
        <span>{props.label}</span>
      </div>
    </div>
  );
}

export default Button;
