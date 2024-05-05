import React, { useState } from 'react';
import classes from './ContentHeader.module.css';
import { useSelector } from 'react-redux';
import Button from '../../Components/Button/Buttton';
import SuccessfulStatusDot from '../../assets/SuccessfulStatusDot.svg';
import ThreeDotDeployed from '../../assets/ThreeDotDeployed.svg';
import OverviewIcon from '../../assets/OverviewIcon.svg';
import EnvironmentVariableIcon from '../../assets/EnvironmentVariableIcon.svg';
import AlertsIcon from '../../assets/AlertsIcon.svg';
import EventHistoryIcon from '../../assets/EventHistoryIcon.svg';

const tabs = [
  {
    label: 'Overview',
    src: OverviewIcon,
    alt: 'Overview',
  },
  {
    label: 'Environment varialbles',
    src: EnvironmentVariableIcon,
    alt: 'Environment varialbles',
  },
  {
    label: 'Alerts',
    src: AlertsIcon,
    alt: 'Alerts',
  },
  {
    label: 'Event History',
    src: EventHistoryIcon,
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
            <img src={SuccessfulStatusDot} alt="Deployed Dot" />
            <p>{applicationStatus}</p>
          </span>
          <img src={ThreeDotDeployed} alt="Three Dot" />
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
