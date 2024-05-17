import { SentimentType } from '@/types/sentimentType';
import { BarChartType } from '@/types/barChartType';
import barchartStyle from '@/styles/components/_bar-chart.module.scss';

export function ConvertSentimentToBarChartType(
  sentimentData: SentimentType
): BarChartType {
  // I use || as a nifty trick in order to prevent that I must seperate the colors as they are in rgb format and with seperation of a comma it is not really efficient.
  const colors = barchartStyle.barColors.replaceAll('), ', ')||').split('||');

  // Add a return statement here

  // const hours =
  //   Math.abs(
  //     new Date(sentimentData.filter[0].startTime).getTime() -
  //       new Date(sentimentData.filter[0].endTime).getTime()
  //   ) /
  //   (1000 * 60 * 60);

  const keywords = sentimentData.filter[0].keywords.map((keyword) => {
    return keyword;
  });

  const twitterData: number[] = [];
  const redditData: number[] = [];

  for (const index in keywords) {
    const mentions = sentimentData.twitter
      .filter((item) => {
        return item.keywords.includes(keywords[index]);
      })
      .map((item) => {
        return (
          item.neutralMentions.count +
          item.positiveMentions.count +
          item.negativeMentions.count
        );
      });

    twitterData.push(mentions.reduce((a, b) => a + b, 0));

    const mentionsReddit = sentimentData.reddit
      .filter((item) => {
        return item.keywords.includes(keywords[index]);
      })
      .map((item) => {
        return (
          item.neutralMentions.count +
          item.positiveMentions.count +
          item.negativeMentions.count
        );
      });
    redditData.push(mentionsReddit.reduce((a, b) => a + b, 0));
  }

  return {
    labels: sentimentData.filter[0].keywords,
    datasets: [
      {
        label: 'Twitter (X)',
        data: twitterData,
        backgroundColor: colors[0]
      },
      {
        label: 'Reddit',
        data: redditData,
        backgroundColor: colors[1]
      }
    ]
  } as BarChartType;
}

export default ConvertSentimentToBarChartType;
