'use client';
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
        display: false,
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
        label: 'Reddit',
        data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
        barThickness: 25,
        backgroundColor: '#59CBFC'
      },
      {
        label: 'X (Twitter)',
        barThickness: 25,
        data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
        backgroundColor: '#6461E5'
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
