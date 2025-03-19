// ScatterPlot.js
import React from 'react';
import { Scatter } from 'react-chartjs-2';
import { Chart as ChartJS, Title, Tooltip, Legend, ScatterController, LinearScale, PointElement, CategoryScale } from 'chart.js';
import './ScatterPlot.css'


// Register the components
ChartJS.register(
  Title,
  Tooltip,
  Legend,
  ScatterController,
  LinearScale,
  PointElement,
  CategoryScale
);

// Define the ScatterPlot component
const ScatterPlot = ({ data }) => {
  // Ensure data is an object with the required keys
  if (!data) return null;

  // Define chart data
  const chartData = {
    datasets: [
      {
        label: 'Number of Vehicles vs Execution Time',
        data: data.num_vehicles_execution_times.map(item => ({
          x: parseFloat(item[0]),
          y: parseFloat(item[1])
        })),
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
        yAxisID: 'y1'
      },
      {
        label: 'Max Distance vs Execution Time',
        data: data.max_distance_execution_times.map(item => ({
          x: parseFloat(item[0]),
          y: parseFloat(item[1])
        })),
        backgroundColor: 'rgba(255, 99, 132, 0.6)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1,
        yAxisID: 'y2'
      }
    ]
  };

  // Define chart options
  const options = {
    scales: {
      x: {
        title: {
          display: true,
          text: 'Execution Time'
        }
      },
      y1: {
        title: {
          display: true,
          text: 'Number of Vehicles'
        },
        position: 'left'
      },
      y2: {
        title: {
          display: true,
          text: 'Max Distance'
        },
        position: 'right',
        grid: {
          drawOnChartArea: false // Hide grid lines for this axis
        }
      }
    },
    plugins: {
      legend: {
        position: 'top'
      }
    },
    responsive: true,
    // maintainAspectRatio: false,
    
  };

  return (
    <div className='scatter-wrapper'>
      <Scatter data={chartData} options={options} />
    </div>
  );
};

export default ScatterPlot;
