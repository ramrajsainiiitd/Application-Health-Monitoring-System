import React from 'react';
import {useState, useEffect} from 'react'
import classes from './EnvironmentVariable.module.css';
import plusIcon from '../../assets/PlusIcon.svg';
import downloadIcon from '../../assets/downloadIcon.svg';
import Card from '../../Components/Card/Card';
// import EnvironmentVariableUploadFile from './EnvironmentVariableUploadFile';
// import EnvironmentVariableEdit from './EnvironmentVariableEdit';

function EnvironmentVariable() {
  return (
    <div className={classes.main}>
      <div>
        <h2>Environment variable</h2>
        <span>
          <button>
            <img src={plusIcon} alt="Plus Icon" />
          </button>
          <button>
            <img src={downloadIcon} alt="Download Icon" />
          </button>
        </span>
      </div>
     <span>No Environment Variable created</span>
     <Card/>
    </div>
  );
}
export default EnvironmentVariable;
