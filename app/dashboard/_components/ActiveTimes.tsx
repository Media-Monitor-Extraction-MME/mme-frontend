import React from 'react';
import '@/dashboard/_styles/components/_activeTimes.scss';
import { Bar } from 'react-chartjs-2';
import { faker } from '@faker-js/faker';
import { element } from 'prop-types';

interface ActiveTimesProps {
  // Add any props you need here
}

const ActiveTimes: React.FC<ActiveTimesProps> = () => {
  const options = {
    responsive: true,
    scales: {
      x: {
        grid: {
          display: false
        }
      }
    },
    elements: {
      bar: {
        boxShadow: '3',
        borderRadius: 5,
        borderWidth: 10,
        borderColor: 'transparent',
        hoverBorderColor: 'rgb(247, 247, 247)',
        hoverBorderWidth: 10
      }
    },
    plugins: {
      title: {
        display: false
      },
      legend: {
        display: false,
        position: 'top' as const,
        align: 'start' as const,
        labels: {
          boxWidth: 0,
          color: '#696565',
          textAlign: 'left' as const
        }
      }
    }
  };

  const labels = ['12 AM', '3 AM', '6 AM', '12 PM', '3 PM', '6 PM', '9 PM'];

  const data = {
    labels,
    datasets: [
      {
        label: 'Posts',
        barThickness: 45,
        barRadius: 5,
        data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
        backgroundColor: '#2AC6A0'
      }
    ]
  };

  return (
    <div>
      <Bar options={options} data={data} />
    </div>
  );
};

export default ActiveTimes;
