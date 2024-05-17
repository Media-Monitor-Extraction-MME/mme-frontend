import { convertSentimentToLineChartType } from '@/libs/convertSentimentToLineChartType';
import { SentimentBType } from '@/types/sentimentType';
import { LineChart } from '@tremor/react';

interface lineChartProps {
  curveType?: 'linear' | 'step' | 'natural' | 'monotone';
  keywords: string[];
  sentimentData: SentimentBType[];
}

const dataFormatter = (number: number) =>
  `${Intl.NumberFormat('us').format(number).toString()}`;

export function LineChartComponent({
  curveType = 'natural',
  keywords = [],
  sentimentData
}: Readonly<lineChartProps>) {
  let lineChartData: Array<{
    sentimentDate: string;
    [keyword: string]: any;
  }> = [];

  lineChartData = convertSentimentToLineChartType(sentimentData || []);

  console.log('lineChartData', lineChartData);
  return (
    <LineChart
      className="h-80"
      data={lineChartData || []}
      index="sentimentDate"
      curveType={curveType}
      categories={keywords}
      colors={['indigo', 'rose']}
      valueFormatter={dataFormatter}
      yAxisWidth={60}
      onValueChange={(v) => console.log(v)}
    />
  );
}
