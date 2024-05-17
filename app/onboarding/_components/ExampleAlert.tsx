import React from 'react';
import '@/onboarding/_styles/components/_exampleAlert.scss';

interface ExampleAlertProps {
  // Add any props you need here
}

const ExampleAlert: React.FC<ExampleAlertProps> = () => {
  return (
    <div className="example-alert">
      <span className="example-alert__title">NEWS</span>
      <hr />
      <ul className="example-alert__list">
        <li className="example-alert__list-item">
          <span className="example-alert__list-item__title">
            Michael Jacksons Best Journey
          </span>{' '}
          <span className="example-alert__list-item__source">Twitter</span>
          <span className="example-alert__list-item__description">
            New mentions and new highlights{' '}
          </span>
        </li>
        <li className="example-alert__list-item">
          <span className="example-alert__list-item__title">
            Hamburgers with Pickels and Onions
          </span>{' '}
          <span className="example-alert__list-item__source">Twitter</span>
          <span className="example-alert__list-item__description">
            New mentions and new highlights{' '}
          </span>
        </li>
      </ul>
    </div>
  );
};

export default ExampleAlert;
