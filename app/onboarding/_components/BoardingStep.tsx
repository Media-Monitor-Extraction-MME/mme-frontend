import React from 'react';
import '@/onboarding/_styles/components/_boardingStep.scss';
import Link from 'next/link';
import BoardingStepButton from './BoardingStepbutton';

interface BoardingStepProps {
  stepNumber: number;
  title: string;
  content: React.ReactNode;
  stepButton: {
    text: string;
    link: string;
  };
  processed?: boolean;
  // Add any props you need here
}

const BoardingStep: React.FC<BoardingStepProps> = (props) => {
  return (
    <div className="boardingstep">
      <h2 className="boardingstep__title">
        <svg
          width="35"
          height="35"
          viewBox="0 0 35 35"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="17.5"
            cy="17.5"
            r="15"
            fill={props.processed ? '#5E47EB' : 'white'}
            stroke="#5E47EB"
            stroke-width="5"
          />
        </svg>
        Step {props.stepNumber}: {props.title}
      </h2>
      <div className="boardingstep__content">{props.content}</div>

      <div className="boardingstep__button-holder">
        <BoardingStepButton {...props.stepButton} />
      </div>
    </div>
  );
};

export default BoardingStep;
