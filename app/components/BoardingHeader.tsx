import React from 'react';
import logo from '@/logo.svg';
import Image from 'next/image';
import UnionJackImage from '@/public/images/unionjack.png';
import '@/styles/components/_boardingHeader.scss';

interface BoardingHeaderProps {
  borderBottom?: boolean;
  buttons?: boolean; 
  bgColor?: string;
}

const BoardingHeader: React.FC<BoardingHeaderProps> = ({ borderBottom, buttons, bgColor }) => {
  const classlist = ['boardingheader'];
  if (borderBottom === false) {
    classlist.push('border-none');
  }
  if (bgColor) {
    classlist.push(`bg-${bgColor}`);
  } else {
    classlist.push('bg-transparent');
  }

  return (
    <header className={classlist.join(' ')}>
      <div>
        <Image src={logo} alt="Logo" />
      </div>
      {buttons && (
        <div className="header-buttons">
          <a href="http://localhost:3000/api/auth/login">
            <button className="login-button">Login</button>
          </a>
          <div className="dropdown">
            <button className="language-button">
            <img src="/images/unionjack.png" alt="UK Flag" />
            English
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div className="dropdown-content">
              <a href="#">English</a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default BoardingHeader;
