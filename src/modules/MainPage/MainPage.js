import React, { useEffect } from 'react';
import MainPageContent from '../MainPageContent/MainPageContent';
import classes from './MainPage.module.css';
import {
  getAllApplications,
  getAllCpuUtilization,
  getAllEventHistory,
  getAllMemoryUtilization,
} from './MainPageActions';
import { useDispatch } from 'react-redux';
import SideBar from '../SideBar/SideBar';
import { useState } from 'react';

const MainPage = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    getAllApplications(dispatch);
    getAllCpuUtilization(dispatch);
    getAllEventHistory(dispatch);
    getAllMemoryUtilization(dispatch);
  }, [dispatch]);

  return (
    <div className={classes.main}>
      <div
        className={
          isCollapsed ? classes.leftContainerCollapsed : classes.leftContainer
        }
      >
        <SideBar isCollapsed={isCollapsed} setIsCollapsed={setIsCollapsed} />
      </div>
      <div
        className={
          isCollapsed ? classes.rightContainerCollapsed : classes.rightContainer
        }
      >
        <MainPageContent />
      </div>
    </div>
  );
};

export default MainPage;
