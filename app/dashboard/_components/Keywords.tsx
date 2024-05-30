'use client';
import React, { useContext } from 'react';
import { KeywordContext } from '../_providers/KeywordProvider';
import Checkbox from './Checkbox';
import { FaEllipsisV } from 'react-icons/fa';
import '@/dashboard/_styles/components/_keywords.scss';

const Keywords: React.FC = () => {
  const { keywords, activeKeywords } = useContext(KeywordContext);
  console.log(keywords, activeKeywords);
  return (
    <ul className="keywords">
      {keywords.map((keyword) => (
        <li key={keyword.primary}>
          <Checkbox
            checked={activeKeywords.includes(keyword.primary)}
            label={keyword.primary}
          />
          <div className="keywords__option-button">
            <FaEllipsisV />
          </div>
        </li>
      ))}
    </ul>
  );
};

export default Keywords;
