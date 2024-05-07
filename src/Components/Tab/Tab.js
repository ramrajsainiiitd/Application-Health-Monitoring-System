import React from 'react';
import classes from './Tab.module.css';

function Tab(props) {
  let className = classes.main;

  if (props.index === props.activeTabIndex) {
    className += ` ${classes.active}`;
  }

  return (
    <div className={classes.main} >
      <div className={className} onClick={() => props.onClick(props.index)}>
        {props.src && <img src={props.src} alt={props.alt} />}
        <span>{props.label}</span>
      </div>
    </div>
  );
}

export default Tab;
