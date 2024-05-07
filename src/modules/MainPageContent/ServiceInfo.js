import React from 'react';
import classes from './ServiceInfo.module.css';
import upsdideArrow from '../../assets/UpsideArrow.svg';
import inSyncIcon from '../../assets/InSync.svg';

const ServiceInfo = () => {
  return (
    <div className={classes.mainContainer}>
      <span>
        <h2>Service Info</h2>
        <img src={upsdideArrow} alt="Up side arrow" />
      </span>
      <div className={classes.main}>
        <span>
          <p>Current version</p>
          <div className={classes.CurrentVersionStatus}>
          <img src={inSyncIcon} alt="In Sync" />
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
