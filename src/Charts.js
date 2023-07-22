import React from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as Chartjs,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
} from 'chart.js';

Chartjs.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip
);

const labels = ["2011", "2013", "2015", "2017", "2019", "2021", "2023", "2025", "2027", "2029"];

const Charts = () => {
  const data = {
    labels: labels,
    datasets: [
      {
        data: labels.map(() => Math.random() * 60000 + 10000),
        backgroundColor: 'transparent',
        borderColor: '#009c68',
        pointBorderColor: 'transparent',
        pointBorderWidth: 4,
      },
      {
        data: labels.map(() => Math.random() * 60000 + 10000),
        backgroundColor: 'transparent',
        borderColor: '#ff6384',
        pointBorderColor: 'transparent',
        pointBorderWidth: 4,
      },
    ],
  };
  const options = {
    plugins: {
      legend: false,
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        position: 'right',
        min: 10000,
        max: 70000,
        ticks: {
          stepSize: 10000,
          callback: (value) => value.toLocaleString(),
        },
      },
    },
    layout: {
      padding: {
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
      },
      tooltip: {
        position: 'average',
      },
    },
  };
  return <Line data={data} options={options}></Line>;
};

export default Charts;
