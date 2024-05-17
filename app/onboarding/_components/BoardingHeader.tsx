import React from 'react';
import logo from '@/logo.svg';
import Image from 'next/image';
import '@/onboarding/_styles/components/_boardingHeader.scss';

const BoardingHeader: React.FC = () => {
  return (
    <header className="boardingheader">
      <div>
        <Image src={logo} alt="Logo" />
      </div>
    </header>
  );
};

export default BoardingHeader;
