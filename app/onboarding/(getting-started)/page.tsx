'use client';
import React, { useEffect, useState } from 'react';
import BoardingStep from '../_components/BoardingStep';
import Link from 'next/link';
import '@/onboarding/_styles/pages/_getting-started.scss';

const Page: React.FC = () => {
  const [progress, setProgress] = useState<{
    keywords?: {
      primary: string;
      secondary: string[];
    }[];
    sources?: {
      name: string;
      description: string;
    }[];
    notifications?: {
      value: string;
      source: string;
      frequency: string;
      sendTo: string;
    }[];
  }>({});

  useEffect(() => {
    const sessionProgress = sessionStorage.getItem('progress');
    if (sessionProgress) {
      setProgress(JSON.parse(sessionProgress));
    }
  }, []);

  return (
    <>
      <h1>Getting Started</h1>
      <hr />
      <div>
        <BoardingStep
          processed={progress.keywords !== undefined}
          title="Choose your keywords"
          stepNumber={1}
          stepButton={{
            text: 'Choose Your First Keywords',
            link: '/onboarding/keywords'
          }}
          content={
            <>
              <b>Start choosing your keywords</b>
              <p>
                Start collecting your specific data with your specific keywords.
              </p>
            </>
          }
        />
        <BoardingStep
          processed={progress.sources !== undefined}
          title="Select your sources"
          stepNumber={2}
          stepButton={{
            text: 'Select Your Sources',
            link: '/onboarding/sources'
          }}
          content={
            <>
              <b>Start selecting your sources</b>
              <p>Select or deselect your sources for content that you like!</p>
            </>
          }
        />
        <BoardingStep
          processed={progress.notifications !== undefined}
          title="Create your alerts"
          stepNumber={3}
          stepButton={{
            text: 'Create Your Alerts',
            link: '/onboarding/notifications'
          }}
          content={
            <>
              <b>Start creating your alerts</b>
              <p>
                Start creating your alerts and stay up to date with your latest
                changes.{' '}
              </p>
            </>
          }
        />
      </div>

      <a href="/dashboard" className="proceed-button">
        Proceed to dashboard
      </a>
    </>
  );
};

export default Page;
