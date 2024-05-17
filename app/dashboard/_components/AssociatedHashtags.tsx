import React from 'react';
import '@/dashboard/_styles/components/_associatedHashTags.scss';

interface AssociatedHashTagProps {
  hashtags: Array<{
    hashtag: string;
    mentions: number;
  }>;
}

const AssociatedHashTag: React.FC<AssociatedHashTagProps> = (props) => {
  return (
    <div className="associated-hashtags">
      <ul className="associated-hashtags__titles">
        <li>HashTag</li>
        <li>Mentions</li>
        <li>Percentage</li>
      </ul>
      {props.hashtags.map((hashtag) => (
        <ul className="associated-hashtags__row" key={hashtag.hashtag}>
          <li className="associated-hashtags__row__hashtag">
            <div>
              {' '}
              <span>#</span>
              <span>{hashtag.hashtag}</span>
            </div>
          </li>
          <li>{hashtag.mentions}</li>
          <li>
            {(
              (hashtag.mentions /
                props.hashtags.reduce((acc, curr) => acc + curr.mentions, 0)) *
              100
            ).toFixed(0)}
            %
          </li>
        </ul>
      ))}
    </div>
  );
};

export default AssociatedHashTag;
