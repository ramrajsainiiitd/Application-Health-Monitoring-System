import React, { useEffect, useState } from 'react';
import Chart from '../../Components/Chart/Chart';
import { useSelector } from 'react-redux';
import classes from './SystemMatrics.module.css';
import Tab from '../../Components/Tab/Tab';

const options = {
  chart: {
    type: 'spline',
    scrollablePlotArea: {
      minWidth: 600,
      scrollPositionX: 1,
    },
  },
  title: {
    text: '',
    align: 'left',
  },
  xAxis: {
    type: 'datetime',
    labels: {
      overflow: 'justify',
    },
  },
  yAxis: {
    minorGridLineWidth: 0,
    gridLineWidth: 0,
    alternateGridColor: null,
    plotBands: [
      {
        // Light air
        from: 0,
        to: 10,
      },
      {
        // Light breeze
        from: 10,
        to: 20,
        color: 'rgba(0, 0, 0, 0)',
      },
      {
        // Gentle breeze
        from: 20,
        to: 30,
        color: 'rgba(68, 170, 213, 0.1)',
      },
      {
        // Moderate breeze
        from: 30,
        to: 40,
        color: 'rgba(0, 0, 0, 0)',
      },
      {
        // Fresh breeze
        from: 40,
        to: 50,
        color: 'rgba(68, 170, 213, 0.1)',
      },
      {
        // Strong breeze
        from: 50,
        to: 60,
        color: 'rgba(0, 0, 0, 0)',
      },
      {
        // Near Gale
        from: 60,
        to: 70,
        color: 'rgba(68, 170, 213, 0.1)',
      },
      {
        // Fresh Gale
        from: 70,
        to: 80,
        color: 'rgba(0, 0, 0, 0)',
      },
      {
        // Strong Gale
        from: 80,
        to: 90,
        color: 'rgba(68, 170, 213, 0.1)',
      },
      {
        // Strong Gale
        from: 90,
        to: 100,
        color: 'rgba(68, 170, 213, 0.1)',
      },
    ],
  },
  tooltip: {
    valueSuffix: '',
  },
  plotOptions: {
    spline: {
      lineWidth: 2,
      states: {
        hover: {
          lineWidth: 3,
        },
      },
      marker: {
        enabled: false,
      },
    },
  },
  series: [],
  navigation: {
    menuItemStyle: {
      fontSize: '10px',
    },
  },
};

export default function SystemMatrics() {
  const applications = useSelector((state) => state.application.applications);
  const memoryUtilizations = useSelector(
    (state) => state.application.memoryUtilizations
  );
  const cpuUtilizations = useSelector(
    (state) => state.application.cpuUtilizations
  );

  const applicationsMap = new Map();
  applications.forEach((val) => {
    applicationsMap.set(parseInt(val.id), val);
  });

  console.log(memoryUtilizations);

  const memoryUtilizationMap = new Map();
  const memorySeries = [];

  memoryUtilizations.forEach((val) => {
    if (memoryUtilizationMap.get(parseInt(val.applicationId))) {
      memoryUtilizationMap.set(parseInt(val.applicationId), [
        ...memoryUtilizationMap.get(parseInt(val.applicationId)),
        parseFloat(val.memoryUtilization),
      ]);
    } else {
      memoryUtilizationMap.set(parseInt(val.applicationId), [
        parseFloat(val.memoryUtilization),
      ]);
    }
  });

  const cpuUtilizationMap = new Map();
  const cpuSeries = [];

  cpuUtilizations.forEach((val) => {
    if (cpuUtilizationMap.get(parseInt(val.applicationId))) {
      cpuUtilizationMap.set(parseInt(val.applicationId), [
        ...cpuUtilizationMap.get(parseInt(val.applicationId)),
        parseFloat(val.cpuUtilization),
      ]);
    } else {
      cpuUtilizationMap.set(parseInt(val.applicationId), [
        parseFloat(val.cpuUtilization),
      ]);
    }
  });

  console.log(memoryUtilizationMap);

  memoryUtilizationMap.forEach((val, key) => {
    let obj = {
      name: applicationsMap.get(key)?.name,
      data: val,
    };
    memorySeries.push(obj);
  });

  cpuUtilizationMap.forEach((val, key) => {
    let obj = {
      name: applicationsMap.get(key)?.name,
      data: val,
    };
    cpuSeries.push(obj);
  });

  let cpuPointStart, cpuPointInterval, memoryPointStart, memoryPointInterval;
  if (memoryUtilizations?.[0]?.timestamp) {
    memoryPointStart = parseInt(memoryUtilizations?.[0]?.timestamp);
    memoryPointInterval = parseInt(
      memoryUtilizations?.[1]?.timestamp - memoryUtilizations?.[0]?.timestamp
    );
  }

  if (cpuUtilizations?.[0]?.timestamp) {
    cpuPointStart = parseInt(cpuUtilizations?.[0]?.timestamp);
    cpuPointInterval = parseInt(
      cpuUtilizations?.[1]?.timestamp - cpuUtilizations?.[0]?.timestamp
    );
  }
  //   states
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  const [optionState, setOptionState] = useState(options);

  useEffect(() => {
    if (activeTabIndex === 0) {
      let obj = { ...options, series: cpuSeries };
      obj.plotOptions.spline.pointStart = cpuPointStart;
      obj.plotOptions.spline.pointInterval = cpuPointInterval;
      setOptionState(obj);
    } else {
      let obj = { ...options, series: memorySeries };
      obj.plotOptions.spline.pointStart = memoryPointStart;
      obj.plotOptions.spline.pointInterval = memoryPointInterval;
      setOptionState(obj);
    }
  }, [activeTabIndex, applications, memoryUtilizations, cpuUtilizations]);

  return (
    <div className={classes.main}>
      <h2>System metrics</h2>
      <div className={classes.tabs}>
        <div className={classes.tab}>
          <Tab
            key={`cpu-tab`}
            index={0}
            activeTabIndex={activeTabIndex}
            onClick={setActiveTabIndex}
            label="CPU"
          />
        </div>
        <div className={classes.tab}>
          <Tab
            key={`memory-tab`}
            index={1}
            activeTabIndex={activeTabIndex}
            onClick={setActiveTabIndex}
            label="Memory"
          />
        </div>
      </div>
      <div className={classes.highChart}>
        <Chart options={optionState} />
      </div>
    </div>
  );
}
