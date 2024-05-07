import React, { useState } from 'react';
import classes from './SideBar.module.css';
import kapstanLogo from '../../assets/KapstanLogoIcon.svg';
import applicationIcon from '../../assets/ApplicatioIcon.svg';
import connectionIcon from '../../assets/ConnectionIcon.svg';
import costIcon from '../../assets/CostIcon.svg';
import securityIcon from '../../assets/SecurityIcon.svg';
import adminIcon from '../../assets/AdminIcon.svg';
import docsIcon from '../../assets/DocsIcon.svg';
import leftArrowIcon from '../../assets/LeftArrowIcon.svg';

const SideBar = (props) => {
  return (
    <div className={props.isCollapsed ? classes.collapsed : classes.main}>
      <div>
        <div
          onClick={() => props.setIsCollapsed(!props.isCollapsed)}
          className={classes.KapstanLogoContainer}
        >
          <img
            style={{ width: '32px', height: '32px' }}
            src={kapstanLogo}
            alt="Kapstan-Logo"
          />
          <h2> Kapstan</h2>
        </div>
        <hr />
        <div className={classes.WorkspaceContainer}>
          <div>
            <img src={applicationIcon} alt="Application-Icon" />
            <p>Applications</p>
          </div>
        </div>
        <hr />
        <div>
          <div className={classes.ElementSecondaryContainer}>
            <div>
              <img src={connectionIcon} alt="Connection-icon" />
              <p> Connections</p>
            </div>
            <div>
              <img src={costIcon} alt="Cost-Icon" />
              <p>Cost</p>
            </div>
            <div>
              <img src={securityIcon} alt="Security-Icon" />
              <p>Security</p>
              <p className={classes.Beta}>Beta</p>
            </div>
          </div>
        </div>
      </div>
      <div className={classes.ElementryComplimentaryContainer}>
        <div>
          <img src={adminIcon} alt="Admin-Icon" />
          <p>Admin</p>
        </div>
        <div>
          <img src={docsIcon} alt="Docs-Icon" />
          <p>Docs</p>
        </div>
      </div>
      <hr />
      <div className={classes.DoubleArrowLeft}>
        <img src={leftArrowIcon} alt="Left-arrow-icon" />
      </div>
    </div>
  );
};

export default SideBar;
