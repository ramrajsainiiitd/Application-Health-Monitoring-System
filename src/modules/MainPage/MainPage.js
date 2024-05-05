import { useEffect } from 'react';
// import SideNavBar from "../../Components/Navigation/SideNavBar";
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
  const dispatch = useDispatch();
  useEffect(() => {
    getAllApplications(dispatch);
    getAllCpuUtilization(dispatch);
    getAllEventHistory(dispatch);
    getAllMemoryUtilization(dispatch);
  }, []);
  
  console.log(window.loading);
  return (
    <div className={classes.main}>
      <div className={classes.leftContainer}>
        <SideBar />
      </div>
      <div className={classes.rightContainer}>
        <MainPageContent />
      </div>
    </div>
  );
};

export default MainPage;
