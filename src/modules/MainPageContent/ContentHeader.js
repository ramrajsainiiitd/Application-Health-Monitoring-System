import React, { useState } from 'react';
import classes from './ContentHeader.module.css';
import { useSelector } from 'react-redux';
import Button from '../../Components/Button/Buttton';
import successfulStatusDot from '../../assets/SuccessfulStatusDot.svg';
import threeDotDeployed from '../../assets/ThreeDotDeployed.svg';
import overviewIcon from '../../assets/OverviewIcon.svg';
import environmentVariableIcon from '../../assets/EnvironmentVariableIcon.svg';
import alertsIcon from '../../assets/AlertsIcon.svg';
import eventHistoryIcon from '../../assets/EventHistoryIcon.svg';

const tabs = [
  {
    label: 'Overview',
    src: overviewIcon,
    alt: 'Overview',
  },
  {
    label: 'Environment varialbles',
    src: environmentVariableIcon,
    alt: 'Environment varialbles',
  },
  {
    label: 'Alerts',
    src: alertsIcon,
    alt: 'Alerts',
  },
  {
    label: 'Event History',
    src: eventHistoryIcon,
    alt: 'Event History',
  },
];

function ContentHeader(props) {
  const applications = useSelector((state) => state.application.applications);
  const selectedApplicationId = useSelector(
    (state) => state.application.selectedApplicationId
  );

  const applicationsMap = new Map();
  applications.forEach((val) => {
    applicationsMap.set(parseInt(val.id), val);
  });

  const applicationName = applicationsMap.get(selectedApplicationId)?.name;
  const applicationStatus = applicationsMap.get(selectedApplicationId)?.status;

  return (
    <div className={classes.main}>
      <div className={classes.top}>
        <h3>{applicationName}</h3>
        <div>
          <span>
            <img src={successfulStatusDot} alt="Deployed Dot" />
            <p>{applicationStatus}</p>
          </span>
          <img src={threeDotDeployed} alt="Three Dot" />
        </div>
      </div>
      <div className={classes.bottom}>
        {tabs.map((val, index) => (
          <Button
            key={`tab-${index}`}
            {...val}
            index={index}
            activeTabIndex={props.activeTabIndex}
            onClick={props.onClick}
          />
        ))}
      </div>
    </div>
  );
}

export default ContentHeader;
