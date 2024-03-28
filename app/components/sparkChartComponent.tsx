import { Card, SparkAreaChart } from '@tremor/react';

interface SparkChartComponentProps {
  name: string;
  activity: Array<{
    weekNumber: number;
    activity: number;
  }>;
  curveType?: 'linear' | 'natural' | 'monotone' | 'step';
}
const chartdata = [
  {
    month: 'Jan 21',
    Performance: 4000
  },
  {
    month: 'Feb 21',
    Performance: 3000
  },
  {
    month: 'Mar 21',
    Performance: 2000
  },
  {
    month: 'Apr 21',
    Performance: 2780
  },
  {
    month: 'May 21',
    Performance: 1890
  },
  {
    month: 'Jun 21',
    Performance: 2390
  },
  {
    month: 'Jul 21',
    Performance: 3490
  }
];

export function SparkChartComponent({
  name,
  activity,
  curveType = 'natural'
}: SparkChartComponentProps) {
  const differenceWeek =
    activity.slice(-1)[0].activity - activity.slice(-2)[0].activity;
  const percentageDifference = (
    (differenceWeek / activity.slice(-2)[0].activity) *
    100
  ).toFixed(0);
  console.log(percentageDifference);
  const dataFormatter = (number: number) =>
    `$${Intl.NumberFormat('us').format(number).toString()}`;
  return (
    <>
      <div className="flex items-center justify-between">
        {/* <Card className="mx-auto flex max-w-lg items-center justify-between px-4 py-3.5"> */}
        <div
          className="flex flex-direction-column"
          style={{ flexDirection: 'column' }}
        >
          {' '}
          <span
            className="text-tremor-default text-tremor-content dark:text-dark-tremor-content"
            style={{ fontSize: '14px' }}
          >
            {name}
          </span>
          <p
            className="text-tremor-content-strong dark:text-dark-tremor-content-strong"
            style={{ fontSize: '30px' }}
          >
            {activity.slice(-1)[0].activity | 0}
          </p>
        </div>
        <SparkAreaChart
          data={activity}
          categories={['activity']}
          curveType={curveType}
          index={'weekNumber'}
          colors={percentageDifference[0] === '-' ? ['rose'] : ['emerald']}
          className="h-8 w-20 sm:h-10 sm:w-56"
        />
        {/* </Card> */}
      </div>
      <div className="flex items-center space-x-2.5">
        <span
          style={
            percentageDifference[0] === '-'
              ? { color: '#F87171', fontSize: '12px' }
              : { color: '#3AC18B', fontSize: '12px' }
          }
        >
          {percentageDifference.replaceAll('-', '')}%
        </span>
        <span style={{ fontSize: '12px' }}>vs previous 7 days</span>
      </div>
    </>
  );
}
