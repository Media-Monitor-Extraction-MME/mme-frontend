interface MentionCardProps {
  title: string;
  mentions: Array<{ sentimentDate: string; mentions: number }>;
}
export function MentionCard({ title, mentions }: MentionCardProps) {
  mentions.sort(
    (a, b) =>
      new Date(a.sentimentDate).getTime() - new Date(b.sentimentDate).getTime()
  );

  let difference = 0;
  if (mentions.length < 2) {
    difference = 0;
  } else {
    const difference =
      ((mentions.slice(-1)[0].mentions - mentions.slice(-2)[0].mentions) /
        mentions.slice(-2)[0].mentions) *
      100;
  }

  function formatNumber(number: number): string {
    if (number >= 1000000) {
      return (number / 1000000).toFixed(1) + 'M';
    } else if (number >= 1000) {
      return (number / 1000).toFixed(1) + 'K';
    } else {
      return number.toString();
    }
  }

  return (
    <>
      <p style={{ fontSize: '16px' }}>{title}</p>
      <div className="flex items-center justify-between">
        <div className="mr-4">
          <p
            style={{ fontSize: '24px', lineHeight: 1 }}
            className="font-semibold"
          >
            {formatNumber(mentions.slice(-1)[0].mentions)}
          </p>
        </div>
        <div className="flex items-end">
          <p
            className={`text-sm rounded-full px-2 py-1 ${
              difference > 0
                ? 'bg-[#F2F4F8] text-[#21272A]'
                : 'bg-[#697077] text-white'
            }`}
          >
            {difference > 0
              ? `+${parseFloat(difference.toFixed(2)).toPrecision(2)}`
              : parseFloat(difference.toFixed(2)).toPrecision(2)}
            %
          </p>
        </div>
      </div>
    </>
  );
}
