import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import './PieChart.css'


ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart = ({labels, numbers, title}) => {
    const data = {
        labels: labels,
        datasets: [
            {
                label: '# of Submissions',
                data: numbers,
                backgroundColor: [
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    // 'rgba(153, 102, 255, 0.2)',
                    // 'rgba(255, 159, 64, 0.2)',
                ],
                borderColor: [
                    'rgba(54, 162, 235, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(255, 99, 132, 1)',
                    'rgba(255, 206, 86, 1)',
                    // 'rgba(153, 102, 255, 1)',
                    // 'rgba(255, 159, 64, 1)',
                ],
                borderWidth: 1,
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
        // maintainAspectRatio: false,
    };

    return <div className='pie-wrapper'><Pie data={data} options={options} /></div>;
};

export default PieChart;