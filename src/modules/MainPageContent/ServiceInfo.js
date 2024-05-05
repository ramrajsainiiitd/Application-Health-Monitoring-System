import React from 'react';
import Classes from './ServiceInfo.module.css';
import UpsdideArrow from '../../assets/UpsideArrow.svg';
import InSyncIcon from '../../assets/InSync.svg';

const ServiceInfo = () => {
  return (
    <div className={Classes.mainContainer}>
      <span>
        <h2>Service Info</h2>
        <img src={UpsdideArrow} alt="Up side arrow" />
      </span>
      <div className={Classes.main}>
        <span>
          <p>Current version</p>
          <div className={Classes.CurrentVersionStatus}>
          <img src={InSyncIcon} alt="In Sync" />
          <p>In sync</p>
          </div>
        </span>
        <span>
          <p>Desired version</p>
          <p>1.2.1</p>
        </span>
      </div>
      <span>
        <button>Deploy</button>
        <p>Last updated 5 hours ago</p>
      </span>
    </div>
  );
};

export default ServiceInfo;
