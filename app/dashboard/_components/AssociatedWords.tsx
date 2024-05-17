import React from 'react';
import '@/dashboard/_styles/components/_associatedWords.scss';

interface AssociatedWordsProps {
  words: Array<{
    word: string;
    mentions: number;
  }>;
}

const AssociatedWords: React.FC<AssociatedWordsProps> = (props) => {
  return (
    <div className="associated-words">
      <ul className="associated-words__titles">
        <li>Word</li>
        <li>Mentions</li>
        <li>Percentage</li>
      </ul>
      {props.words.map((word) => (
        <ul className="associated-words__row" key={word.word}>
          <li className="associated-words__row__word">{word.word}</li>
          <li>{word.mentions}</li>
          <li>
            {(
              (word.mentions /
                props.words.reduce((acc, curr) => acc + curr.mentions, 0)) *
              100
            ).toFixed(2)}
            %
          </li>
        </ul>
      ))}
    </div>
  );
};

export default AssociatedWords;
