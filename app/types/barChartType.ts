export type BarChartType = {
  labels: string[];
  datasets: Array<{
    label: 'Twitter (X)' | 'Reddit';
    data: number[];
    backgroundColor?: string;
  }>;
};
