'use client';
import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import KeywordMoodSVG from '@/dashboard/_components/KeywordMood.svg';
import KeywordActivitySVG from '@/dashboard/_components/GeneralKeywordActivity.svg';
import KeywordPerformanceSVG from '@/dashboard/_components/KeywordsPerformance.svg';
import AssociatedWordsSVG from '@/dashboard/_components/AssociatedWords.svg';
import AssociatedHashtagsSVG from '@/dashboard/_components/AssociatedHashtags.svg';
import MoodBoxesSVG from '@/dashboard/_components/MoodBoxes.svg';
import '@/dashboard/_styles/_default.scss';
import { FaEllipsisV } from 'react-icons/fa';
import Checkbox from '../_components/Checkbox';
import KeywordMood from '../_components/KeywordMood';
import KeywordActivity from '../_components/KeywordActivity';
import DashboardCard from '../_components/DashboardCard';
import AssociatedWords from '../_components/AssociatedWords';
import AssociatedHashtags from '../_components/AssociatedHashtags';

const Default: React.FC = () => {
  const [keywords, setKeywords] = useState<
    Array<{
      primary: string;
      secondary: string[];
    }>
  >([]);

  useEffect(() => {
    const sessionString = sessionStorage.getItem('progress') as string;
    const sessionData = JSON.parse(sessionString);

    if (sessionData.keywords) {
      setKeywords(sessionData.keywords);
    }
  }, []);

  console.log(keywords);
  return (
    <div className="dashboard">
      <ul className="dashboard__keywords">
        {keywords.map((keyword) => (
          <li key={keyword.primary}>
            <Checkbox checked={true} label={keyword.primary} />
            <div className="dashboard__keywords__option-button">
              <FaEllipsisV />
            </div>
          </li>
        ))}
      </ul>
      <div className="dashboard__grid">
        <DashboardCard title="Keywords Mood">
          <Image src={KeywordMoodSVG} alt="" />
        </DashboardCard>
        <DashboardCard title="General Keywords Activity">
          <KeywordActivity />
        </DashboardCard>
        <DashboardCard title="Keywords Performance">
          <Image src={KeywordPerformanceSVG} alt="" />
        </DashboardCard>
        <DashboardCard
          classes={{ card: 'p-0', title: 'p-4' }}
          title="Associated Words"
          colSpan={3}
        >
          <>
            {/* <Image src={AssociatedWordsSVG} alt="" /> */}
            <AssociatedWords words={[{ word: 'Eurovision', mentions: 5000 }]} />
          </>
        </DashboardCard>
        <DashboardCard
          classes={{ card: 'p-0', title: 'p-4' }}
          title="Associated Hashtags"
          colSpan={3}
        >
          <>
            <AssociatedHashtags
              hashtags={[{ hashtag: 'Joost', mentions: 5000 }]}
            />
          </>
        </DashboardCard>
      </div>
      {/* <div className="dashboard__row">
        <Image src={KeywordMoodSVG} alt="" />
        <Image src={KeywordActivitySVG} alt="" />
      </div>
      <div className="dashboard__row">
        <Image src={KeywordPerformanceSVG} alt="" />
        <Image src={AssociatedWordsSVG} alt="" />
        <Image src={AssociatedHashtagsSVG} alt="" />
      </div> */}
    </div>
  );
};

export default Default;
