import { Grid } from '@tremor/react';
import React from 'react';
import logo from './logo.svg';
import Image from 'next/image';
import '@/styles/components/_sidebar.scss';
import BellSvg from './components/BellSvg';
import CogSvg from './components/CogSvg';
import DesktopComputerSvg from './components/DesktopComputerSvg';
import UserThumbSvg from './components/UserThumbSvg';

const Sidebar: React.FC<{}> = (props) => {
  const notificationCount = 5; // Replace with your actual notification count

  return (
    <div className="sidebar">
      {logo && <Image id="logo" src={logo} alt="Logo" />}
      <div>
        <ul className="top-list">
          <li>
            <DesktopComputerSvg /> Home
          </li>
          <li>
            <BellSvg /> Notifications{' '}
            <span className="notication-count">{notificationCount}</span>
          </li>
          <li>
            <CogSvg /> Settings
          </li>
        </ul>
        <ul className="bottom-list">
          <li>
            <UserThumbSvg /> <span>User name</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
