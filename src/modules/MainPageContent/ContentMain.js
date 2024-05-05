import React from 'react';
import SystemMatrics from './SystemMatrics';
import classes from './ContentMain.module.css';
import EventHistory from './EventHistory';
import ServiceInfo from './ServiceInfo';

function ContentMain() {
  return (
    <div className={classes.mainContainer}>
      <ServiceInfo/>
      <div className={classes.main}>
        <SystemMatrics />
        <EventHistory />
      </div>
    </div>
  );
}

export default ContentMain;
