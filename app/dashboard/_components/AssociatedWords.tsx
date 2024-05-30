import React from 'react';
import '@/dashboard/_styles/components/_associatedWords.scss';

interface AssociatedWordsProps {
  words: Array<{
    word: string;
    keyword: string;
    mentions: number;
  }>;
}

const AssociatedWords: React.FC<AssociatedWordsProps> = (props) => {
  return (
    <div className="associated-words">
      <table>
        <thead>
          <tr>
            <th>Associated Words</th>
            <th>Keyword</th>
            <th>Mentions</th>
            <th>Percentage</th>
          </tr>
        </thead>
        <tbody>
          {props.words.map((word) => (
            <tr key={word.word}>
              <td>{word.word}</td>
              <td>{word.keyword}</td>
              <td>{word.mentions}</td>
              <td>
                {(
                  (word.mentions /
                    props.words.reduce((acc, curr) => acc + curr.mentions, 0)) *
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

export default AssociatedWords;
