import React from 'react';
import '@/dashboard/_styles/components/_dashboardCard.scss';

interface DashboardCardProps {
  title: string;
  children: React.ReactNode;
  colSpan?: number;
  classes?: {
    card?: string;
    title?: string;
    content?: string;
  };
}
const DashboardCard: React.FC<DashboardCardProps> = (props) => {
  const colSpan = props.colSpan ?? 6;
  return (
    <div
      className={
        (props.classes?.card ?? '') + ` dashboard-card col-span-${colSpan}`
      }
    >
      <span className={props.classes?.title + ' dashboard-card__title'}>
        {props.title}
      </span>
      <div className={props.classes?.content + ' dashboard-card__content'}>
        {props.children}
      </div>
    </div>
  );
};

export default DashboardCard;
