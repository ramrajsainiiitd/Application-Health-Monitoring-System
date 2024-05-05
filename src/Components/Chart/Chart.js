import React from 'react';
import classes from './Chart.module.css';
import HighchartsReact from 'highcharts-react-official';
import Highcharts from 'highcharts';

function Chart({ options }) {
  return (
    <div className={classes.main}>
      <HighchartsReact
        highcharts={Highcharts}
        constructorType={'chart'}
        options={options}
      />
    </div>
  );
}

export default Chart;
