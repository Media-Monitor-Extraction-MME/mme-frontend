'use client';
import React, { useEffect, useState } from 'react';
import '@/onboarding/_styles/components/_boardingSource.scss';
interface BoardingSourceProps {
  // Add your component props here
  logo: React.ReactNode;
  sourceName: string;
  sourceDescription: string;
  selected: boolean;
  disabled?: boolean;
  onClick?: (selected: boolean) => void;
}

const BoardingSource: React.FC<BoardingSourceProps> = (props) => {
  return (
    <div>
      {/* Twitter */}
      <div className="source-card">
        <div className="source-card__logo">{props.logo}</div>
        <div className="source-card__info">
          <h4>{props.sourceName}</h4>
          <p>{props.sourceDescription}</p>
        </div>

        <button
          className={
            (props.selected === true ? 'selected ' : '') + 'source-card__button'
          }
          {...(props.disabled && { disabled: props.disabled })}
          onClick={() => {
            if (props.onClick) {
              props.onClick(!props.selected);
            }
          }}
        >
          {props.selected ? 'Deselect' : 'Select'}
        </button>
      </div>
    </div>
  );
};

export default BoardingSource;
