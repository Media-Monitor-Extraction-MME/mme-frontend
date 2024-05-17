'use client';
import React from 'react';
import '@/onboarding/_styles/components/_boardingStepButton.scss';
import { useRouter } from 'next/navigation';

interface BoardingStepButtonProps {
  link: string;
  text: string;
}
const BoardingStepButton: React.FC<BoardingStepButtonProps> = (props) => {
  const router = useRouter();

  return (
    <button
      onClick={() => {
        router.replace(props.link);
      }}
      className="boardingstep-button"
    >
      <div>
        <span>+</span>
        {props.text}
        <div></div>
      </div>
    </button>
  );
};

export default BoardingStepButton;
