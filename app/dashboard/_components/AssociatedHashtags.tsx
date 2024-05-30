import React from 'react';
import '@/dashboard/_styles/components/_associatedHashTags.scss';

interface AssociatedHashTagProps {
  hashtags: Array<{
    hashtag: string;
    keyword: string;
    mentions: number;
  }>;
}

const AssociatedHashTag: React.FC<AssociatedHashTagProps> = (props) => {
  return (
    <div className="associated-hashtags">
      <table>
        <thead>
          <tr>
            <th>Associated Hashtag</th>
            <th>Keyword</th>
            <th>Mentions</th>
            <th>Percentage</th>
          </tr>
        </thead>
        <tbody>
          {props.hashtags.map((hashtag) => (
            <tr key={hashtag.hashtag}>
              <td>
                <div>
                  <span>#</span>
                  <span>{hashtag.hashtag}</span>
                </div>
              </td>
              <td>{hashtag.keyword}</td>
              <td>{hashtag.mentions}</td>
              <td>
                {(
                  (hashtag.mentions /
                    props.hashtags.reduce(
                      (acc, curr) => acc + curr.mentions,
                      0
                    )) *
                  100
                ).toFixed(2)}
                %
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AssociatedHashTag;
