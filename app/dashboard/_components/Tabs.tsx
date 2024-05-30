'use client';
import React, { useState } from 'react';
import '@/dashboard/_styles/components/_tabs.scss';

interface TabsProps {
  tabs: string[];
  activeTab?: string;
  onChange?: (tab: string) => void;
  // Add any props you need here
}

const Tabs: React.FC<TabsProps> = (props) => {
  const [activeTab, setActiveTab] = useState(props.activeTab ?? props.tabs[0]);
  return (
    <div className="tabs">
      {props.tabs.map((tab) => (
        <button
          className={activeTab === tab ? 'active' : ''}
          key={tab}
          onClick={() => {
            if (props.onChange) {
              props.onChange(tab);
            }

            setActiveTab(tab);
          }}
        >
          {tab}
        </button>
      ))}
    </div>
  );
};

export default Tabs;
