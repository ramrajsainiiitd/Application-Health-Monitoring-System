import React from 'react';
import { useState } from 'react';
import classes from './EnvironmentVariableUploadFile.module.css';

const EnvironmentVariableUploadFile = () => {
  // const [fileName, setFileName] = useState('');
  // const [pdfBase64, setPdfBase64] = useState(null);

  // const [selectedFileName, setSelectedFileName] = useState(null);
  // const handleFileChange = (event) => {
  //   const file = event.target.files[0];

  //   if (file) {
  //     setSelectedFileName(file.name);
  //   } else {
  //     setSelectedFileName(null);
  //   }
  // };

  // const handleAddFile = (event) => {
  //   const file = event.target.files[0];

  //   if (file && file.type === 'application/pdf') {
  //     const reader = new FileReader();

  //     reader.onload = () => {
  //       const base64String = reader.result;
  //       localStorage.setItem('pdfFile', base64String);

  //       setFileName(file.name);
  //       setPdfBase64(base64String);
  //     };
  //     reader.readAsDataURL(file);
  //   }
  // };

  // const retrievePdfFromLocalStorage = () => {
  //   const storedPdf = localStorage.getItem('pdfFile');
  //   setPdfBase64(storedPdf);
  // };

  return (
    <div className={classes.main}>
      <label className="upload-box">
        {/* {selectedFileName
          ? `Selected file: ${selectedFileName}`
          : 'Click or drag file(s) here to upload'} */}
        <input
          type="file"
          // onChange={handleFileChange}
          accept="application/pdf"
        />
      </label>
      <p>Upload a .env file. It should not be greater than 5KB.</p>
      <div>
        <button>Cancle</button>
        <button >Add</button>
        <button >GetFile</button>
      </div>
    </div>
  );
};
export default EnvironmentVariableUploadFile;
