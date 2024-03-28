import { hasFlag } from 'country-flag-icons';
import getUnicodeFlagIcon from 'country-flag-icons/unicode';
import Image from 'next/image';
import FlagComponent from './CountryFlag';
import { Grid } from '@tremor/react';
interface LangaugeInPostsProps {
  langauges: Array<{
    country: string;
    percentage: number;
    posts: number;
  }>;
}
export function LangaugeInPostsComponent({ langauges }: LangaugeInPostsProps) {
  return (
    <ul className="popular-langauges">
      {langauges.map((langauge, index) => (
        <li key={index}>
          <div className="langauge-row">
            <div className="country">
              <FlagComponent country={langauge.country} />
              <span className="country-name">{langauge.country}</span>
            </div>
            <span className="percentage">{langauge.percentage}%</span>
            <span className="post-amount">{langauge.posts}</span>
          </div>
        </li>
      ))}
    </ul>
  );
}
