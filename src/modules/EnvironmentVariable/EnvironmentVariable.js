import React from 'react';
import {useState, useEffect} from 'react'
import classes from './EnvironmentVariable.module.css';
import PlusIcon from '../../assets/PlusIcon.svg';
import DownloadIcon from '../../assets/downloadIcon.svg';
import EnvironmentVariableUploadFile from './EnvironmentVariableUploadFile';
import EnvironmentVariableEdit from './EnvironmentVariableEdit';

function EnvironmentVariable() {
  const [dataArray, setDataArray] = useState([]);
    const fetchDataFromLocalStorage = () => {
        const storedEnvironmentVariable = localStorage.getItem('Item');
        if (storedEnvironmentVariable) {
            try {
                const data = Array.isArray(storedEnvironmentVariable)
                    ? storedData
                    : Object.values(storedEnvironmentVariable);
                setDataArray(data);
            } catch (error) {
                console.error('Failed to parse JSON data from local storage:', error);
                setDataArray([]);
            }
        } else {
            setDataArray([]);
        }
    };
    useEffect(() => {
        fetchDataFromLocalStorage();
    }, []);
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
