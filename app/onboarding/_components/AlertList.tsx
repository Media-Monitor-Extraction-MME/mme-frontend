import React from 'react';
import '@/onboarding/_styles/components/_alertList.scss';
import { FaEdit, FaTrash } from 'react-icons/fa';

interface AlertListProps {
  alerts: Array<{
    value: string;
    source?: string;
    frequency?: string;
    sendTo?: string;
  }>;
  onRemove?: (index: number) => void;
  onEdit?: (index: number) => void;
  onCreate?: () => void;
}

const AlertList: React.FC<AlertListProps> = (props) => {
  return (
    <div className="alert-list">
      <div className="alert-list__header">
        <span className="alert-list__header__title">
          My Alerts {'(' + props.alerts.length + ')'}
        </span>
        <button
          className="alert-list__header__create-button"
          onClick={() => {
            if (props.onCreate) {
              props.onCreate();
            }
          }}
        >
          Create Alert
        </button>
      </div>

      {props.alerts.map((alert, index) => (
        <div key={index} className="alert-list__item">
          <span className="alert-list__item__title">{alert.value}</span>
          <div className="alert-list__item__button-holder">
            <button
              className="alert-list__item__button"
              onClick={() => {
                if (props.onEdit) {
                  props.onEdit(index);
                }
              }}
            >
              <FaEdit />
            </button>
            <button
              className="alert-list__item__button"
              onClick={() => {
                if (props.onRemove) {
                  props.onRemove(index);
                }
              }}
            >
              <FaTrash />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AlertList;
