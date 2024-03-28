'use client';

import { Card, AreaChart, Title, Text } from '@tremor/react';
import { faker } from '@faker-js/faker';
import { useState } from 'react';

async function generateData(startTime: Date, endTime: Date) {
  const keywords = [];
  for (let i = 0; i < 10; i++) {
    keywords.push(faker.company.name());
  }

  const hours =
    Math.abs(startTime.getTime() - endTime.getTime()) / (1000 * 60 * 60);
  console.log(hours);

  const twitterData = [];
  const redditData = [];
  for (let i = 0; i < hours; i++) {
    for (const keyword of keywords) {
      const tPosSent = faker.number.float({
        min: 0,
        max: 1,
        fractionDigits: 1
      });
      const tNegSent = faker.number.float({
        min: 0,
        max: (1 - tPosSent) / 2,
        fractionDigits: 1
      });
      const tNeuSent = 1 - tPosSent - tNegSent;
      twitterData.push({
        timeRange: {
          startTime: new Date(startTime.getTime() + i * 60 * 60 * 1000),
          endTime: new Date(startTime.getTime() + (i + 1) * 60 * 60 * 1000)
        },
        collectiveSentiment: {
          positive: parseFloat(tPosSent.toPrecision(1)),
          negative: parseFloat(tNegSent.toPrecision(1)),
          neutral: parseFloat(tNeuSent.toPrecision(1))
        },
        keywords: [keyword]
      });
      const rPosSent = faker.number.float({
        min: 0,
        max: 1,
        fractionDigits: 1
      });
      const rNegSent = faker.number.float({
        min: 0,
        max: (1 - tPosSent) / 2,
        fractionDigits: 1
      });
      const rNeuSent = 1 - tPosSent - tNegSent;
      redditData.push({
        timeRange: {
          startTime: new Date(startTime.getTime() + i * 60 * 60 * 1000),
          endTime: new Date(startTime.getTime() + (i + 1) * 60 * 60 * 1000)
        },
        collectiveSentiment: {
          positive: parseFloat(rPosSent.toPrecision(1)),
          negative: parseFloat(rNegSent.toPrecision(1)),
          neutral: parseFloat(rNeuSent.toPrecision(1))
        },
        keywords: [keyword]
      });
    }
  }
  const data = {
    filter: [
      {
        startTime,
        endTime,
        keywords
      }
    ],
    twitter: twitterData,
    reddit: redditData
  };

  return data;
}

export default function Example() {
  const [loading, setLoading] = useState(true);
  const [datav2, setDatav2] = useState<any[]>([]);
  const [keywords, setKeywords] = useState<string[]>([]);

  const startTime = new Date('2024-03-19 19:00:00');
  const endTime = new Date('2024-03-21 12:00:00');

  if (loading) {
    generateData(startTime, endTime)
      .then((data) => {
        setKeywords(data.filter.flatMap((item) => item.keywords));
        const twitterData = data.twitter
          .map((item) => {
            const startTime = item.timeRange.startTime.toUTCString();
            const endTime = item.timeRange.endTime.toUTCString();
            const keywords = item.keywords;

            const tData: {
              startTime: string;
              endTime: string;
            } = {
              startTime,
              endTime
            };

            keywords.forEach((keyword) => {
              (tData as any)[keyword] =
                item.collectiveSentiment.positive -
                item.collectiveSentiment.negative;
            });

            return tData;
          })
          .map((item, pos, self) => {
            const fIndex = self.findIndex((v) => {
              return v.startTime === item.startTime;
            });
            if (fIndex === pos) {
              return item;
            } else {
              Object.keys(item).forEach((key) => {
                if (key !== 'startTime' && key !== 'endTime') {
                  (self[fIndex] as any)[key] = (item as any)[key];
                }
              });
              return null;
            }
          })
          .filter((item) => item !== null);

        const redditData = data.reddit
          .map((item) => {
            const startTime = item.timeRange.startTime.toUTCString();
            const endTime = item.timeRange.endTime.toUTCString();
            const keywords = item.keywords;

            const tData: {
              startTime: string;
              endTime: string;
            } = {
              startTime,
              endTime
            };

            keywords.forEach((keyword) => {
              (tData as any)[keyword] =
                item.collectiveSentiment.positive -
                item.collectiveSentiment.negative;
            });

            return tData;
          })
          .map((item, pos, self) => {
            const fIndex = self.findIndex((v) => {
              return v.startTime === item.startTime;
            });
            if (fIndex === pos) {
              return item;
            } else {
              Object.keys(item).forEach((key) => {
                if (key !== 'startTime' && key !== 'endTime') {
                  (self[fIndex] as any)[key] = (item as any)[key];
                }
              });
              return null;
            }
          })
          .filter((item) => item !== null);

        setDatav2(twitterData.concat(redditData));
      })
      .finally(() => setLoading(false));
  }

  const hours =
    Math.abs(startTime.getTime() - endTime.getTime()) / (1000 * 60 * 60);

  return (
    <>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <Card className="mt-8">
          <Title>Keywords</Title>
          <Text>Keyword mentions</Text>
          <AreaChart
            className="mt-4 h-80"
            data={
              hours > 24
                ? datav2
                    .map(
                      (
                        d: { startTime: Date; endTime: Date },
                        i,
                        self: { startTime: Date; endTime: Date }[]
                      ) => {
                        const fIndex = self.findIndex((v) => {
                          return (
                            new Date(v.startTime).toDateString() ===
                            new Date(d.startTime).toDateString()
                          );
                        });
                        if (fIndex === i) {
                          return {
                            ...d,
                            startTime: new Date(d.startTime).toDateString(),
                            endTime: new Date(d.endTime).toDateString()
                          };
                        } else {
                          Object.keys(d)
                            .filter((dd) => {
                              return dd !== 'startTime' && dd !== 'endTime';
                            })
                            .forEach((key) => {
                              (self[fIndex] as any)[key] =
                                ((self[fIndex] as any)[key] + (d as any)[key]) /
                                2;
                            });
                          return null;
                        }
                      }
                    )
                    .filter((item) => item !== null)
                : datav2
            }
            categories={keywords}
            index="startTime"
            colors={[
              'indigo',
              'fuchsia',
              'rose',
              'lime',
              'green',
              'yellow',
              'slate',
              'blue',
              'teal',
              'cyan',
              'amber',
              'stone'
            ]}
            valueFormatter={(number: number) =>
              `${Intl.NumberFormat('us')
                .format(parseFloat(number.toPrecision(1)))
                .toString()}`
            }
            yAxisWidth={60}
            minValue={-1}
            maxValue={1}
          />
        </Card>
      )}
    </>
  );
}
