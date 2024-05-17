import { ChartData, Point } from 'chart.js';
import React from 'react';
import { Line } from 'react-chartjs-2';
import '@/dashboard/_styles/components/_keywordActivity.scss';

interface KeywordActivityProps {
  // Add props here
}

const KeywordActivity: React.FC<KeywordActivityProps> = () => {
  const chartData: ChartData<'line', (number | Point | null)[], unknown> = {
    labels: [
      'Sep',
      'Oct',
      'Nov',
      'Dec',
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug'
    ],
    datasets: [
      {
        label: 'X (Twitter)',
        backgroundColor: '#6461E5',
        borderColor: '#6461E5',
        data: [0, 50, 600, 200, 300, 400, 50, 600, 900, 200, 300, 500]
      },
      {
        label: 'Reddit',
        backgroundColor: '#59CBFC',
        borderColor: '#59CBFC',
        data: [0, 5, 10, 20, 10, 100, 600, 200, 50, 70, 400, 200]
      }
    ]
  };
  return (
    <div className="keyword-activity">
      <Line
        data={chartData}
        options={{
          elements: {
            line: {
              tension: 0.3
            },
            point: {
              pointStyle: false
            }
          }
        }}
      />
    </div>
  );
};

export default KeywordActivity;
