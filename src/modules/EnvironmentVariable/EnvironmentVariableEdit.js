import React from 'react';
import classes from './EnvironmentVariableEdit.module.css';

const EnvironmentVariableEdit = () => {
  return (
    <div className={classes.main}>
      Name:
      <input type="text" />
      Value: <input type="number" />
      <button>Delete</button>
      <button>Cancle</button>
      <button>Add</button>
    </div>
  );
};

export default EnvironmentVariableEdit;
