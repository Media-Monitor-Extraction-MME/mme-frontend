'use client';
import React, { useState, useEffect, useContext } from 'react';
import '@/dashboard/_styles/_default.scss';
import { FaEllipsisV } from 'react-icons/fa';
import Checkbox from '../_components/Checkbox';
import KeywordMood from '../_components/KeywordMood';
import KeywordActivity from '../_components/KeywordActivity';
import DashboardCard from '../_components/DashboardCard';
import AssociatedWords from '../_components/AssociatedWords';
import KeywordPerformance from '../_components/KeywordPerformance';
import AssociatedHashtags from '../_components/AssociatedHashtags';
import CustomDropdown from '../_components/CustomDropdown';
import Tabs from '../_components/Tabs';
import { KeywordContext } from '../_providers/KeywordProvider';
import ActiveTimes from '../_components/ActiveTimes';
import PopularLanguages from '../_components/PopularLangauges';
import RedditPosts from '../_components/RedditPosts';
import TwitterPosts from '../_components/TwitterPosts';

const Default: React.FC = () => {
  const { keywords } = useContext(KeywordContext);
  const [activeContentTab, setActiveContentTab] = useState<string>('Words');

  const [moods, setMoods] = useState<Array<{}>>([]);

  // useEffect(() => {
  //   const sessionString = sessionStorage.getItem('progress') as string;
  //   const sessionData = JSON.parse(sessionString);

  //   if (sessionData.keywords) {
  //     setKeywords(sessionData.keywords);
  //   }
  // }, []);

  return (
    <div className="dashboard">
      <div className="dashboard__grid">
        <DashboardCard
          title="Keywords Mood"
          classes={{
            card: 'p-0',
            title: 'p-4'
          }}
        >
          <KeywordMood sentiment={0.2} />
        </DashboardCard>
        <DashboardCard
          title="General Keywords Activity"
          actionElement={
            <CustomDropdown
              onSelect={(value) => {
                console.log(value);
              }}
              options={[
                { value: '', label: 'All Moods' },
                { value: 'positive', label: 'Positive' },
                { value: 'negative', label: 'Negative' },
                { value: 'neutral', label: 'Neutral' }
              ]}
            />
          }
        >
          <KeywordActivity />
        </DashboardCard>
        <DashboardCard title="Keywords Performance">
          <KeywordPerformance />
        </DashboardCard>
        <DashboardCard
          classes={{ card: 'p-0', title: 'p-4' }}
          title="Associated Content"
          colSpan={6}
          actionElement={
            <Tabs
              tabs={['Words', 'Hashtags']}
              onChange={(tab) => {
                setActiveContentTab(tab);
              }}
            />
          }
        >
          <>
            {activeContentTab.toLowerCase() === 'words' && (
              <AssociatedWords
                words={[
                  { word: 'Eurovision', keyword: 'Joost', mentions: 5000 },
                  { word: 'Camera', keyword: 'Joost', mentions: 200 }
                ]}
              />
            )}
            {activeContentTab.toLowerCase() === 'hashtags' && (
              <AssociatedHashtags
                hashtags={[
                  { hashtag: 'FreeJoost', keyword: 'Joost', mentions: 5000 }
                ]}
              />
            )}
          </>
        </DashboardCard>
        <DashboardCard title="Popular Languages Used With Keywords" colSpan={6}>
          <PopularLanguages />
        </DashboardCard>
        <DashboardCard title="Most Active Times" colSpan={6}>
          <ActiveTimes />
        </DashboardCard>
        <DashboardCard
          title="Top 10 Popular Posts"
          colSpan={6}
          height={800}
          actionElement={
            <a className="view-all" href="#">
              {'View All'}
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.09987 8H14.8984"
                  stroke="#5E47EB"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M11.1834 11.7152L14.8984 8.00016L11.1834 4.28516"
                  stroke="#5E47EB"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </a>
          }
        >
          <RedditPosts />
        </DashboardCard>
        <DashboardCard
          title="Top 10 Popular Posts "
          colSpan={6}
          height={800}
          actionElement={
            <a className="view-all" href="#">
              {'View All'}
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.09987 8H14.8984"
                  stroke="#5E47EB"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M11.1834 11.7152L14.8984 8.00016L11.1834 4.28516"
                  stroke="#5E47EB"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </a>
          }
        >
          <TwitterPosts />
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
