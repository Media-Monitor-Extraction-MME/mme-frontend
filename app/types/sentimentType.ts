export type SentimentPlatformType = {
  timeRange: { startTime: string; endTime: string };
  neutralMentions: {
    count: number;
  };
  positiveMentions: {
    count: number;
  };
  negativeMentions: {
    count: number;
  };
  // collectiveSentiment: { pos: number; neu: number; neg: number };
  keywords: string[];
};

export type SentimentBType = {
  keyword: string;
  sentimentDate: string;
  mentions: number;
  sentiment: {
    positive: number;
    neutral: number;
    negative: number;
  };
};
export type SentimentType = {
  filter: Array<{
    startTime: string;
    endTime: string;
    keywords: string[];
  }>;
  twitter: SentimentPlatformType[];
  reddit: SentimentPlatformType[];
};

export default SentimentType;
