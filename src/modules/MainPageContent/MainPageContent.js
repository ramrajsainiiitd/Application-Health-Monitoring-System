import { useState } from 'react';
import Header from '../../Components/Header/Header';
import ContentHeader from './ContentHeader';
import ContentMain from './ContentMain';
import classes from './MainPageContent.module.css';
import EnvironmentVariable from '../EnvironmentVariable/EnvironmentVariable';

const MainPageContent = () => {
  const [activeTabIndex, setActiveTabIndex] = useState(0);

  function clickHandler(index) {
    setActiveTabIndex(index);
  }

  return (
    <div className={classes.main}>
      <Header />
      <ContentHeader activeTabIndex={activeTabIndex} onClick={clickHandler} />
      {activeTabIndex === 0 ? <ContentMain /> : null}
      {activeTabIndex === 1 ? <EnvironmentVariable /> : null}
    </div>
  );
};

export default MainPageContent;
