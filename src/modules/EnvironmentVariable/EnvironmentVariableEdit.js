import React, { useState } from 'react';
import classes from './EnvironmentVariableEdit.module.css';
import Card from '../../Components/Card/Card'

const EnvironmentVariableEdit = () => {
  const [Item, setItem] = useState();
  return (
    <div className={classes.main}>
      <Card item={Item} />
      <button>Cancle</button>
      <button>Add</button>
    </div>
  );
};

export default EnvironmentVariableEdit;
