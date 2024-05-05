import React from 'react';
import classes from './EnvironmentVariable.module.css';
import PlusIcon from '../../assets/PlusIcon.svg';
import DownloadIcon from '../../assets/downloadIcon.svg';
import EnvironmentVariableUploadFile from './EnvironmentVariableUploadFile';
import EnvironmentVariableEdit from './EnvironmentVariableEdit';

function EnvironmentVariable() {
  const storedEnvironmentVariable = localStorage.getItem('Item');
  const storedData = storedEnvironmentVariable
    ? JSON.parse(storedEnvironmentVariable)
    : [];
  const dataArray = Array.isArray(storedData)
    ? storedData
    : Object.values(storedData);

    console.log("stored data ",dataArray);
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
      {dataArray.length > 0 ? (
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Value</th>
            </tr>
          </thead>
          <tbody>
            {dataArray.map((item, index) => (
              <tr key={index}>
                <td>{item.name}</td>
                <td>{item.value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <span>No environment variables created.</span>
      )}
      <EnvironmentVariableUploadFile />
      <EnvironmentVariableEdit />
    </div>
  );
}

export default EnvironmentVariable;
