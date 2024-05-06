import React from 'react';
import {useState, useEffect} from 'react'
import classes from './EnvironmentVariable.module.css';
import PlusIcon from '../../assets/PlusIcon.svg';
import DownloadIcon from '../../assets/downloadIcon.svg';
// import EnvironmentVariableUploadFile from './EnvironmentVariableUploadFile';
// import EnvironmentVariableEdit from './EnvironmentVariableEdit';

function EnvironmentVariable() {
  return (
    <div className={classes.main}>
      <div>
        <h2>Environment variable</h2>
        <span>
          <button>
            <img src={PlusIcon} alt="Plus Icon" />
          </button>
          <button>
            <img src={DownloadIcon} alt="Download Icon" />
          </button>
        </span>
      </div>
     <span>No Environment Variable created</span>
    </div>
  );
}
export default EnvironmentVariable;
