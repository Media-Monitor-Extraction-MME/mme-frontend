import React from 'react';
import '@/dashboard/_styles/components/_keywordPerformance.scss';
import { Bar } from 'react-chartjs-2';
import { faker } from '@faker-js/faker';

interface KeywordPerformanceProps {
  // Add any props you need here
}

const KeywordPerformance: React.FC<KeywordPerformanceProps> = () => {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'bottom' as const
      },
      title: {
        display: true,
        text: 'Chart.js Bar Chart'
      }
    }
  };

  const labels = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July'
  ];

  const data = {
    labels,
    datasets: [
      {
        label: 'Dataset 1',
        data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
        backgroundColor: 'rgba(255, 99, 132, 0.5)'
      },
      {
        label: 'Dataset 2',
        data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
        backgroundColor: 'rgba(53, 162, 235, 0.5)'
      }
    ]
  };

  return (
    <div>
      <Bar options={options} data={data} />
    </div>
  );
};

export default KeywordPerformance;
