// NOTE: The tailwind.config.js has to be extended if you use custom HEX color
// ...['[#f0652f]'].flatMap((customColor) => [
//   `bg-${customColor}`,
//   `border-${customColor}`,
//   `hover:bg-${customColor}`,
//   `hover:border-${customColor}`,
//   `hover:text-${customColor}`,
//   `fill-${customColor}`,
//   `ring-${customColor}`,
//   `stroke-${customColor}`,
//   `text-${customColor}`,
//   `ui-selected:bg-${customColor}]`,
//   `ui-selected:border-${customColor}]`,
//   `ui-selected:text-${customColor}`,
// ]),

import { BarChart as BarChartComponent } from '@tremor/react';
import { BarChart as MUIBarChart } from '@mui/x-charts';
import Chart from 'chart.js/auto';
import { CategoryScale } from 'chart.js';
import { Bar } from 'react-chartjs-2';
import style from '@/styles/components/_bar-chart.module.scss';
import { useEffect } from 'react';
import SentimentType from '@/types/sentimentType';
import ConvertSentimentToBarChartType from '@/libs/convertSentimentToBarChartType';

const chartdata = [
  {
    keyword: 'Hamburger',
    'Twitter (X)': 167,
    Reddit: 145
  },
  {
    keyword: 'Cheeseburger',
    'Twitter (X)': 125,
    Reddit: 110
  },
  {
    keyword: 'Kipcorn',
    'Twitter (X)': 156,
    Reddit: 149
  },
  {
    keyword: 'Johny Dep',
    'Twitter (X)': 165,
    Reddit: 112
  },
  {
    keyword: 'EURO 2020',
    'Twitter (X)': 153,
    Reddit: 138
  },
  {
    keyword: 'Crisis',
    'Twitter (X)': 124,
    Reddit: 145
  }
];

Chart.register(CategoryScale);

interface BarChartProps {
  data: SentimentType;
  options?: {
    type?: 'horizontal' | 'vertical';
    stacked?: boolean;
    responsive?: boolean;
    barStyle?: {};
    scales?: {
      y?: {
        min?: number;
        max?: number;
      };
      x?: {
        min?: number;
        max?: number;
      };
    };
    animation?:
      | { onComplete: () => void; delay: (context: any) => number }
      | {
          radius?: {
            duration: number;
            easing: string;
            loop: (context: any) => boolean;
          };
        };
  };
}
export function BarChart({ data, options }: BarChartProps) {
  console.log(data);
  const chartData = ConvertSentimentToBarChartType(data);
  console.log(chartData);
  let chartOptions: {
    indexAxis: 'x' | 'y';
    stacked: boolean;
    responsive: boolean;
    barStyle?: { [key: string]: string | number };
    scales?: {
      y?: {
        min?: number | undefined;
        max?: number | undefined;
      };
      x?: {
        min?: number | undefined;
        max?: number | undefined;
      };
    };
  } = {
    indexAxis: 'x',
    stacked: false,
    responsive: true
  };

  if (options) {
    chartOptions = {
      indexAxis: options.type === 'horizontal' ? 'y' : 'x',
      stacked: options.stacked || false,
      responsive: options.responsive || true,
      ...(options.barStyle ?? {
        barStyle: options.barStyle
      }),
      ...(options.scales !== undefined
        ? {
            scales: {
              ...(options.scales!.y ?? {
                y: {
                  ...(options.scales!.y!.min && options.scales!.y!.max
                    ? {
                        min: options.scales!.y!.min as number,
                        max: options.scales!.y!.max as number
                      }
                    : {})
                } as { min?: number; max?: number }
              }),
              ...(options.scales!.x ?? {
                x: {
                  ...(options.scales!.x!.min && options.scales!.x!.max
                    ? {
                        min: options.scales!.x!.min as number,
                        max: options.scales!.x!.max as number
                      }
                    : {})
                } as { min?: number; max?: number }
              })
            } as
              | {
                  y?: { min?: number; max?: number };
                  x?: { min?: number; max?: number };
                }
              | {}
          }
        : {})
    };
  }

  return (
    <div className={style.barchart}>
      <Bar
        options={{
          ...chartOptions,
          maintainAspectRatio: false,
          plugins: {
            legend: { align: 'start', title: { position: 'start' } }
          }
        }}
        data={chartData}
      />
      {/* <canvas id="myChart" width="400" height="400"></canvas> */}
      {/* <BarChartComponent
        className="h-72"
        data={chartdata}
        index="date"
        categories={['Twitter (X)', 'Reddit', 'Open Water Swimming']}
        colors={['indigo-300', 'rose-200', '#ffcc33']}
        yAxisWidth={30}
      /> */}
      {/* <MUIBarChart
        dataset={chartdata}
        height={400}
        width={300}
        className="m-auto"
        yAxis={[{ scaleType: 'band', dataKey: 'keyword' }]}
        series={[
          { dataKey: 'Twitter (X)', label: 'Twitter (X)' },
          { dataKey: 'Reddit', label: 'Reddit' }
        ]}
        layout="horizontal"
      /> */}
    </div>
  );
}
