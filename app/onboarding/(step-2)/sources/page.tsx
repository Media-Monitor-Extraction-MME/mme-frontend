'use client';
import React, { useState, useEffect } from 'react';
import '@/onboarding/_styles/pages/_sources.scss';
import BoardingSource from '@/onboarding/_components/BoardingSource';
import TwitterLogo from '@/TwitterLogo.svg';
import RedditLogo from '@/RedditLogo.svg';
import YoutubeLogo from '@/YoutubeLogo.svg';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import GetProgress from '@/onboarding/libs/GetProgress';
import UpdateProgress from '@/onboarding/libs/UpdateProgress';

const Page: React.FC = () => {
  const router = useRouter();
  const [sources, setSources] = useState<
    Array<{
      source: string;
      selected: boolean;
    }>
  >([
    { source: 'Twitter', selected: true },
    { source: 'Reddit', selected: true },
    { source: 'Youtube', selected: false }
  ]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const progress = GetProgress();
    if (progress.sources) {
      setSources(progress.sources);
      setLoading(false);
    }
  }, []);

  // if (loading) return <div></div>;

  return (
    <div className="source-page">
      <h2>Select your sources</h2>
      <p>
        Our Sources that are connected to our platform, if you wish to not see a
        source please deselect the source! dashboard with visual charts for an
        easy, graphical interpretation.
      </p>

      {/* Twitter */}
      <BoardingSource
        selected={
          sources.find((source) => source.source === 'Twitter')?.selected ??
          false
        }
        logo={<Image src={TwitterLogo} alt="Twitter Logo" />}
        sourceName="Twitter"
        sourceDescription="A platform for sharing brief, impactful messages and engaging in real-time discussions."
        onClick={(selected) => {
          const newSources = [...sources];
          const sourceIndex = newSources.findIndex((source) => {
            return source.source === 'Twitter';
          });
          newSources[sourceIndex].selected = selected;
          setSources(newSources);
        }}
      />

      <BoardingSource
        selected={
          sources.find((source) => source.source === 'Reddit')?.selected ??
          false
        }
        logo={<Image src={RedditLogo} alt="Reddit Logo" />}
        sourceName="Reddit"
        sourceDescription="A platform for sharing brief, impactful messages and engaging in real-time discussions."
        onClick={(selected) => {
          const newSources = [...sources];
          const sourceIndex = newSources.findIndex((source) => {
            return source.source === 'Reddit';
          });
          newSources[sourceIndex].selected = selected;
          setSources(newSources);
        }}
      />

      <BoardingSource
        logo={<Image src={YoutubeLogo} alt="Youtube Logo" />}
        sourceName="Youtube"
        sourceDescription="A platform for sharing brief, impactful messages and engaging in real-time discussions."
        disabled={true}
        selected={
          sources.find((source) => source.source === 'Youtube')?.selected ??
          false
        }
        onClick={(selected) => {
          const newSources = [...sources];
          const sourceIndex = newSources.findIndex((source) => {
            return source.source === 'Youtube';
          });
          newSources[sourceIndex].selected = selected;
          setSources(newSources);
        }}
      />

      <div className="btn-group">
        <button
          className="source-save"
          onClick={() => {
            UpdateProgress({ sources: sources });
            router.replace('/onboarding');
          }}
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default Page;
