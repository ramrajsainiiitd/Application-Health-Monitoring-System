import React, { useEffect, useState } from 'react';
import classes from './EventHistory.module.css';
import BasicTable from '../../Components/BasicTable/BasicTable';
import { useSelector } from 'react-redux';
import Button from '../../Components/Button/Buttton';

function EventHistory() {
  const eventHistory = useSelector((state) => state.application.eventHistory);
  const selectedApplicationId = useSelector(
    (state) => state.application.selectedApplicationId
  );
  const filteredEventHistroy = eventHistory.filter(
    (val) => val.applicationId == selectedApplicationId
  );
  console.log(selectedApplicationId);
  console.log('Event History: ', filteredEventHistroy);
  const [dataSource, setDataSource] = useState(filteredEventHistroy);
  const [buttonState, setButtonState] = useState('View more');
  const [eventStatus, setEventStatus] = useState({
    in_progress: 'in_progress',
    failed: 'failed',
    successful: 'successful',
  });

  function clickHandler() {
    if (buttonState === 'View less') {
      setButtonState('View more');
    } else {
      setButtonState('View less');
    }
  }

  useEffect(() => {
    if (buttonState === 'View less') {
      setDataSource(filteredEventHistroy);
    } else {
      setDataSource(filteredEventHistroy.slice(-5));
    }
  }, [buttonState, eventHistory, selectedApplicationId]);
  console.log(filteredEventHistroy);

  return (
    <div className={classes.main}>
      <h2>Event History</h2>
      <div>
        <BasicTable
          data={dataSource}
          columns={['event', 'version', 'status']}
        />
        <Button label={buttonState} onClick={clickHandler} />
      </div>
    </div>
  );
}

export default EventHistory;