import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import './LineChart.css'


ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const LineChart = ({title, dataset, labelY}) => {
  const data = {
    labels: dataset.map(subList => subList[0]),
    datasets: [
      {
        label: labelY,
        data: dataset.map(subList => subList[1]),
        fill: false,
        backgroundColor: 'rgb(75, 192, 192)',
        borderColor: 'rgba(75, 192, 192, 0.2)',
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: title,
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: '*10 us',
        },
        // ticks: {
        //   callback: function(value) {
        //     // Format x-axis labels to show magnitude (optional)
        //     return value.toString();
        //   },
        // },
      },
    },
  };

  return <div className='line-wrapper'>
    <Line data={data} options={options} />
  </div>
};

export default LineChart;