'use client';
import { ChartData, Point } from 'chart.js';
import React from 'react';
import { Line } from 'react-chartjs-2';
import '@/dashboard/_styles/components/_keywordActivity.scss';
import { GraphQLDataType } from '@/services/graphql.service';

interface KeywordActivityProps {
  mentions: GraphQLDataType['data']['mentions'];
  // Add props here
}

enum Months {
  Sep = 9,
  Oct = 10,
  Nov = 11,
  Dec = 12,
  Jan = 1,
  Feb = 2,
  Mar = 3,
  Apr = 4,
  May = 5,
  Jun = 6,
  Jul = 7,
  Aug = 8
}

const monthLabels = Object.keys(Months).map((month) => {
  return month;
});

function convertMentionsToActivity(
  mentions: GraphQLDataType['data']['mentions']
) {
  const activity: number[] = [];
  Object.values(Months).forEach((month) => {
    const monthData = mentions!.filter(
      (mention) => new Date(mention.date as string).getMonth() === month
    );
    activity.push(
      monthData.reduce((total, mention) => total + mention.count!, 0)
    );
  });
  return activity;
}

const KeywordActivity: React.FC<KeywordActivityProps> = (props) => {
  const activity = convertMentionsToActivity(props.mentions);
  console.log(activity);
  // return <></>;
  const chartData: ChartData<'line', (number | Point | null)[], unknown> = {
    labels: monthLabels,
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
        data: activity
      }
    ]
  };
  return (
    <div className="keyword-activity">
      <Line
        data={chartData}
        options={{
          plugins: {
            legend: {
              position: 'bottom' as const
            }
          },
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
