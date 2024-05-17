import { SentimentBType } from '@/types/sentimentType';

export function convertSentimentToLineChartType(
  sentiments: SentimentBType[]
): Array<{
  sentimentDate: string;
  [keyword: string]: any;
}> {
  const lineChartData: {
    sentimentDate: Date;
    [keyword: string]: any;
  }[] = [];

  sentiments.forEach((sentiment) => {
    const date = new Date(sentiment.sentimentDate).toLocaleString('default', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    });

    const existingData = lineChartData.find(
      (data) =>
        new Date(data.sentimentDate).toLocaleString('default', {
          month: 'short',
          day: 'numeric',
          year: 'numeric'
        }) === date
    );

    if (existingData) {
      existingData[sentiment.keyword] = sentiment.mentions;
    } else {
      const newData: { sentimentDate: Date; [keyword: string]: any } = {
        sentimentDate: new Date(sentiment.sentimentDate)
      };
      newData[sentiment.keyword] = sentiment.mentions;
      lineChartData.push(newData);
    }
  });

  const allKeys = Array.from(
    new Set(lineChartData.flatMap((data) => Object.keys(data)))
  );
  console.log(allKeys);

  const minDate = new Date(
    Math.min(...sentiments.map((s) => new Date(s.sentimentDate).getTime()))
  );
  const maxDate = new Date(
    Math.max(...sentiments.map((s) => new Date(s.sentimentDate).getTime()))
  );

  // const currentDate = minDate;
  // while (currentDate <= maxDate) {
  //   const date = currentDate.toLocaleString('default', {
  //     month: 'short',
  //     day: 'numeric',
  //     year: 'numeric'
  //   });

  //   const existingData = lineChartData.find(
  //     (data) =>
  //       new Date(data.sentimentDate).toLocaleString('default', {
  //         month: 'short',
  //         day: 'numeric',
  //         year: 'numeric'
  //       }) === date
  //   );

  //   if (!existingData) {
  //     const newData: { sentimentDate: Date; [keyword: string]: any } = {
  //       sentimentDate: new Date(currentDate.toDateString())
  //     };
  //     allKeys.forEach((key) => {
  //       if (key !== 'sentimentDate') {
  //         newData[key] = 0;
  //       }
  //     });
  //     lineChartData.push(newData);
  //   } else {
  //     allKeys.forEach((key) => {
  //       if (key !== 'sentimentDate' && !existingData[key]) {
  //         existingData[key] = 0;
  //       }
  //     });
  //   }

  //   currentDate.setDate(currentDate.getDate() + 1);
  // }

  lineChartData.sort((a, b) => {
    const dateA = new Date(a.sentimentDate);
    const dateB = new Date(b.sentimentDate);
    return dateA.getTime() - dateB.getTime();
  });
  return lineChartData.map<{
    [keyword: string]: any;
    sentimentDate: string;
  }>((result) => {
    const formattedDate = new Date(result.sentimentDate).toLocaleString(
      'default',
      {
        month: 'short',
        day: 'numeric',
        year: 'numeric'
      }
    );

    allKeys.forEach((key) => {
      if (!result.hasOwnProperty(key)) {
        result[key] = 0;
      }
    });

    return {
      ...result,
      sentimentDate: formattedDate
    };
  });
}
