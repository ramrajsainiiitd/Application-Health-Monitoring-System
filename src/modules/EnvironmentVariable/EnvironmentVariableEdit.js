import React, { useState } from 'react';
import classes from './EnvironmentVariableEdit.module.css';

const EnvironmentVariableEdit = () => {
  const [AddVariable, setAddVariable] = useState({
    name: '',
    value: 0,
  });
  // const [name, setName] = useState('');
  // const [value, setValue] = useState(0);
  // function handleClick() {
  //   setAddVariable({
  //     ...AddVariable,
  //     name: name,
  //     value: value,
  //   });
  // }
  // const data = JSON.stringify(AddVariable);
  // localStorage.setItem('Item',data);
  return (
    <div className={classes.main}>
      Name:
      <input onChange={(e) => setName(e.target.value)} type="text" />
      Value: <input onChange={(e) => setValue(e.target.value)} type="number" />
      <button>Delete</button>
      <button>Cancle</button>
      <button>Add</button>
    </div>
  );
};

export default EnvironmentVariableEdit;
