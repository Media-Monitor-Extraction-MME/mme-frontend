import React from 'react';
import '@/dashboard/_styles/components/_dashboardCard.scss';

interface DashboardCardProps {
  title: string;
  children: React.ReactNode;
  actionElement?: React.ReactNode;
  colSpan?: number;
  height?: number;
  classes?: {
    card?: string;
    title?: string;
    content?: string;
  };
}
const DashboardCard: React.FC<DashboardCardProps> = (props) => {
  const colSpan = props.colSpan ?? 6;
  const height = props.height ?? 500;
  return (
    <div
      className={
        (props.classes?.card ?? '') + ` dashboard-card col-span-${colSpan}`
      }
      style={{ height: height }}
    >
      <span className={props.classes?.title + ' dashboard-card__title'}>
        {props.title}{' '}
        {props.actionElement && (
          <div className="dashboard-card__action">{props.actionElement}</div>
        )}
      </span>

      <div className={props.classes?.content + ' dashboard-card__content'}>
        {props.children}
      </div>
    </div>
  );
};

export default DashboardCard;
