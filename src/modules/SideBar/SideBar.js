import React, { useState } from 'react';
import classes from './SideBar.module.css';
import KapstanLogo from '../../assets/KapstanLogoIcon.svg';
import ApplicationIcon from '../../assets/ApplicatioIcon.svg';
import Divider from '../../assets/Divider.svg';
import ConnectionIcon from '../../assets/ConnectionIcon.svg';
import CostIcon from '../../assets/CostIcon.svg';
import SecurityIcon from '../../assets/SecurityIcon.svg';
import AdminIcon from '../../assets/AdminIcon.svg';
import DocsIcon from '../../assets/DocsIcon.svg';
import LeftArrowIcon from '../../assets/LeftArrowIcon.svg';

const SideBar = () => {

  return (
    <div className={classes.main}>
      <div>
        <div className={classes.KapstanLogoContainer}>
          <img src={KapstanLogo} alt="Kapstan-Logo" />
          <h2> Kapstan</h2>
        </div>
        <hr />
        <div className={classes.WorkspaceContainer}>
          <div>
            <img src={ApplicationIcon} alt="Application-Icon" />
            <p>Applications</p>
          </div>
        </div>
        <hr />
        <div>
          <div className={classes.ElementSecondaryContainer}>
            <div>
              <img src={ConnectionIcon} alt="Connection-icon" />
              <p> Connections</p>
            </div>
            <div>
              <img src={CostIcon} alt="Cost-Icon" />
              <p>Cost</p>
            </div>
            <div>
              <img src={SecurityIcon} alt="Security-Icon" />
              <p>Security</p>
              <p className={classes.Beta} >Beta</p>
            </div>
          </div>
        </div>
      </div>
      <div className={classes.ElementryComplimentaryContainer}>
        <div>
          <img src={AdminIcon} alt="Admin-Icon" />
          <p>Admin</p>
        </div>
        <div>
          <img src={DocsIcon} alt="Docs-Icon" />
          <p>Docs</p>
        </div>
      </div>
      <hr />
      <div className={classes.DoubleArrowLeft}>
        <img src={LeftArrowIcon} alt="Left-arrow-icon" />
      </div>
    </div>
  );
};

export default SideBar;
