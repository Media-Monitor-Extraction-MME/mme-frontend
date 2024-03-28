import '@/styles/components/_word-list.scss';
export function WordList({
  words,
  listFormat = 'regular'
}: Readonly<{
  words: Array<{ word: string; percentage: number }>;
  listFormat?: 'regular' | 'striped';
}>) {
  return (
    <ul className={listFormat === 'striped' ? 'wordlist-striped' : 'wordlist'}>
      {words.map((word, index) => (
        <li key={index}>
          <div>
            <b>{word.word}</b>
            <span>{word.percentage}%</span>
          </div>
        </li>
      ))}
    </ul>
  );
}
