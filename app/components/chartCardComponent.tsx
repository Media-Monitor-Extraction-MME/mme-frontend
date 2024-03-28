import { Card } from '@tremor/react';

interface ChartCardComponentProps {
  title: string;
  classes?: {
    root?: string;
    title?: string;
  };
  children: React.ReactNode;
}
export function ChartCardComponent({
  title,
  classes,
  children
}: Readonly<ChartCardComponentProps>) {
  return (
    <Card className={`p-0 chartcard ${classes ? classes.root : ''}`}>
      <div className="flex justify-between">
        <b
          className={`chartcard-title ${classes ? classes.title : ''}`}
          style={{ fontSize: '18px' }}
        >
          {title}
        </b>
        <div></div>
      </div>
      {children}
    </Card>
  );
}
