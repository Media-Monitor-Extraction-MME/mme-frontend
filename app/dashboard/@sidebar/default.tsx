'use client';
import React, { useEffect, useState } from 'react';
import logo from '@/logo.svg';
import Image from 'next/image';
import '@/styles/components/_sidebar.scss';
import BellSvg from '@/components/BellSvg';
import CogSvg from '@/components/CogSvg';
import DesktopComputerSvg from '@/components/DesktopComputerSvg';
import UserThumbSvg from '@/components/UserThumbSvg';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const Default = () => {
  const notificationCount = 5; // Replace with your actual notification count
  const [currentPage, setCurrentPage] = useState<string | undefined>(undefined);
  const router = useRouter();

  useEffect(() => {
    setCurrentPage(window.location.pathname.split('/')[2]);
  }, []);

  return (
    <div className="sidebar">
      {logo && <Image id="logo" src={logo} alt="Logo" />}
      <div>
        <ul className="top-list">
          <li
            className={currentPage === undefined ? 'active' : ''}
            onClick={() => {
              setCurrentPage(undefined);
              router.replace('/dashboard');
            }}
          >
            Keyword Analysis
          </li>
          <li
            className={currentPage === 'notifications' ? 'active' : ''}
            onClick={() => {
              setCurrentPage('notifications');
              router.replace('/dashboard/notifications');
            }}
          >
            Notifications
            {/* <span className="notication-count">{notificationCount}</span> */}
          </li>
          <li
            className={currentPage === 'settings' ? 'active' : ''}
            onClick={() => {
              setCurrentPage('settings');
              router.replace('/dashboard/settings');
            }}
          >
            Settings
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

export default Default;
