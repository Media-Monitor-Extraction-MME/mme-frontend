import React from 'react';
import logo from '@/logo.svg';
import Image from 'next/image';
import '@/styles/components/_boardingHeader.scss';

interface BoardingHeaderProps {
  // Define the props for the BoardingHeader component
  borderBottom?: boolean;
  buttons?: boolean;
  bgColor?: string;
}
const BoardingHeader: React.FC<BoardingHeaderProps> = (props) => {
  const classlist = ['boardingheader'];
  if (props.borderBottom !== undefined && props.borderBottom === false) {
    classlist.push('border-none');
  }
  if (props.bgColor) {
    classlist.push(`bg-${props.bgColor}`);
  } else {
    classlist.push('bg-transparent');
  }
  return (
    <header className={classlist.join(' ')}>
      <div>
        <Image src={logo} alt="Logo" />
      </div>
    </header>
  );
};

export default BoardingHeader;
