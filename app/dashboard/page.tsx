'use client';

import {
  Card,
  Grid,
  TabGroup,
  Tab,
  TabList,
  TabPanels,
  TabPanel
} from '@tremor/react';
import { FlexRow } from '@/components/flexRow';
import { SparkChartComponent } from '@/components/sparkChartComponent';
import { LineChartComponent } from '@/components/lineChartComponent';
import { SelectComponent } from '@/components/selectComponent';
import { ChartCardComponent } from '@/components/chartCardComponent';
import { PopularPostsComponent } from '@/components/popularPostsComponent';
import { LangaugeInPostsComponent } from '@/components/langaugeInPostsComponent';
import { WordList } from '@/components/WordList';
import { BarChart } from '@/components/BarChart';
import { useEffect, useState } from 'react';
import { SentimentBType } from '@/types/sentimentType';
import { MentionCard } from '@/components/MentionCard';
import { convertSentimentToLineChartType } from '@/libs/convertSentimentToLineChartType';
import DropDownButton from '@/components/DropDownButton';

export default function PlaygroundPage() {
  const [sentiments, setSentiments] = useState<Array<SentimentBType>>([]);
  const [loading, setLoading] = useState(true);
  const [keywords, setKeywords] = useState<Array<string>>(['Sakura', 'Rock']);
  const [activeKeywords, setActiveKeywords] = useState<Array<string>>([
    'Sakura',
    'Rock'
  ]);

  useEffect(() => {
    fetch(
      'http://localhost:3001/sentiments?keywords=' + activeKeywords.join(','),
      {
        cache: 'no-cache'
      }
    ).then(async (data) => {
      const json = await data.json();
      setSentiments(json as Array<SentimentBType>);

      setLoading(false);
    });
  }, [setSentiments, setLoading, activeKeywords]);

  return (
    <div className="p-4">
      <div className="inline-block	">
        <b style={{ fontSize: '20px' }}>Keywords</b>
        <div className="flex flex-row">
          {keywords.map((keyword) => (
            <DropDownButton
              key={keyword}
              isChecked={activeKeywords.includes(keyword)}
              checkbox={true}
              content={keyword}
              onClick={() => {
                if (activeKeywords.includes(keyword)) {
                  setActiveKeywords(
                    activeKeywords.filter((item) => item !== keyword)
                  );
                } else {
                  setActiveKeywords([...activeKeywords, keyword]);
                }
              }}
              menu={[
                {
                  item: 'Edit Keyword',
                  onClick: () => {
                    setActiveKeywords([
                      ...keywords.filter((item) => item !== keyword),
                      'Test'
                    ]);
                    setKeywords([
                      ...keywords.filter((item) => item !== keyword),
                      'Test'
                    ]);
                  }
                },
                {
                  item: 'Remove Keyword',
                  onClick: () => {
                    setKeywords(keywords.filter((item) => item !== keyword));
                    setActiveKeywords(
                      activeKeywords.filter((item) => item !== keyword)
                    );
                  }
                }
              ]}
              classes={{
                button1: 'py-2 px-2',
                button2: 'py-2 px-2'
              }}
              icon={
                <svg
                  width="18"
                  height="4"
                  viewBox="0 0 18 4"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="2"
                    cy="2"
                    r="2"
                    transform="rotate(-90 2 2)"
                    fill="white"
                    fill-opacity="0.9"
                  />
                  <circle
                    cx="9"
                    cy="2"
                    r="2"
                    transform="rotate(-90 9 2)"
                    fill="white"
                    fill-opacity="0.9"
                  />
                  <circle
                    cx="16"
                    cy="2"
                    r="2"
                    transform="rotate(-90 16 2)"
                    fill="white"
                    fill-opacity="0.9"
                  />
                </svg>
              }
            />
          ))}
        </div>
      </div>
      <TabGroup>
        <TabList>
          <Tab className="flex flex-direction-column items-end pb-3">
            Overview
          </Tab>
          <Tab className="flex flex-direction-column items-end pb-3">
            Reddit
          </Tab>
          <Tab className="flex flex-direction-column items-end pb-3">
            Twitter
          </Tab>
          <div style={{ marginLeft: 'auto' }}>
            <Grid numItems={2} className="gap-6 pb-3">
              <SelectComponent placeholder="Filter" options={['Radius']} />
              <SelectComponent
                disabled={true}
                placeholder="Group"
                options={['Radius']}
              />
            </Grid>
          </div>
        </TabList>

        <TabPanels>
          <TabPanel>
            <FlexRow
              numItems={12}
              className="gap-6"
              columns={[
                {
                  columnWidth: 3,
                  content: (
                    <>
                      {/* <Card>
                        {loading === false && (
                          <MentionCard
                            title={'Keyword Activity'}
                            mentions={sentiments.reduce(
                              (
                                acc: Array<{
                                  sentimentDate: string;
                                  mentions: number;
                                }>,
                                curr
                              ) => {
                                const existingDate = acc.find(
                                  (item) =>
                                    item.sentimentDate === curr.sentimentDate
                                );
                                if (existingDate) {
                                  existingDate.mentions += curr.mentions;
                                } else {
                                  acc.push(curr);
                                }
                                return acc;
                              },
                              []
                            )}
                          />
                        )}
                      </Card> */}
                    </>
                  )
                },
                {
                  columnWidth: 3,
                  content: (
                    <>
                      {/* <Card>
                        {loading === false && (
                          <MentionCard
                            title={'Neutral Mentions'}
                            mentions={sentiments.reduce(
                              (
                                acc: Array<{
                                  sentimentDate: string;
                                  mentions: number;
                                }>,
                                curr
                              ) => {
                                const existingDate = acc.find(
                                  (item) =>
                                    item.sentimentDate === curr.sentimentDate
                                );
                                if (existingDate) {
                                  existingDate.mentions += curr.mentions;
                                } else {
                                  acc.push(curr);
                                }
                                return acc;
                              },
                              []
                            )}
                          />
                        )}
                      </Card> */}
                    </>
                  )
                },
                {
                  columnWidth: 3,
                  content: (
                    <>
                      {/* <Card>
                        {loading === false && (
                          <MentionCard
                            title={'Positive Mentions'}
                            mentions={sentiments.reduce(
                              (
                                acc: Array<{
                                  sentimentDate: string;
                                  mentions: number;
                                }>,
                                curr
                              ) => {
                                const existingDate = acc.find(
                                  (item) =>
                                    item.sentimentDate === curr.sentimentDate
                                );
                                if (existingDate) {
                                  existingDate.mentions += curr.mentions;
                                } else {
                                  acc.push(curr);
                                }
                                return acc;
                              },
                              []
                            )}
                          />
                        )}
                      </Card> */}
                    </>
                  )
                },
                {
                  columnWidth: 3,
                  content: (
                    <>
                      {/* <Card>
                        {loading === false && (
                          <MentionCard
                            title={'Negative Mentions'}
                            mentions={sentiments.reduce(
                              (
                                acc: Array<{
                                  sentimentDate: string;
                                  mentions: number;
                                }>,
                                curr
                              ) => {
                                const existingDate = acc.find(
                                  (item) =>
                                    item.sentimentDate === curr.sentimentDate
                                );
                                if (existingDate) {
                                  existingDate.mentions += curr.mentions;
                                } else {
                                  acc.push(curr);
                                }
                                return acc;
                              },
                              []
                            )}
                          />
                        )}
                      </Card> */}
                    </>
                  )
                },
                {
                  columnWidth: 6,
                  content: (
                    <ChartCardComponent
                      classes={{ root: 'p-3' }}
                      title="General Keyword Activity"
                    >
                      <LineChartComponent
                        curveType="monotone"
                        keywords={activeKeywords}
                        sentimentData={sentiments}
                      />
                    </ChartCardComponent>
                  )
                },
                {
                  columnWidth: 6,
                  content: (
                    <ChartCardComponent
                      classes={{ title: 'p-3' }}
                      title="Keyword Performance"
                    >
                      <BarChart
                        data={{
                          filter: [
                            {
                              startTime: '2021-01-01',
                              endTime: '2021-01-31',
                              keywords: ['Bitcoin', 'Kucoin']
                            }
                          ],
                          twitter: [
                            {
                              timeRange: {
                                startTime: '2021-01-01',
                                endTime: '2021-01-31'
                              },
                              neutralMentions: { count: 100 },
                              positiveMentions: { count: 100 },
                              negativeMentions: { count: 100 },
                              keywords: ['Bitcoin']
                            },
                            {
                              timeRange: {
                                startTime: '2021-01-01',
                                endTime: '2021-01-31'
                              },
                              neutralMentions: { count: 200 },
                              positiveMentions: { count: 400 },
                              negativeMentions: { count: 100 },
                              keywords: ['Kucoin']
                            }
                          ],
                          reddit: [
                            {
                              timeRange: {
                                startTime: '2021-01-01',
                                endTime: '2021-01-31'
                              },
                              neutralMentions: { count: 100 },
                              positiveMentions: { count: 100 },
                              negativeMentions: { count: 100 },
                              keywords: ['Kucoin']
                            },
                            {
                              timeRange: {
                                startTime: '2021-01-01',
                                endTime: '2021-01-31'
                              },
                              neutralMentions: { count: 200 },
                              positiveMentions: { count: 400 },
                              negativeMentions: { count: 100 },
                              keywords: ['Bitcoin']
                            }
                          ]
                        }}
                        options={{
                          type: 'horizontal'
                        }}
                      />
                    </ChartCardComponent>
                  )
                },
                {
                  columnWidth: 6,
                  content: (
                    <ChartCardComponent
                      classes={{ root: 'p-3' }}
                      title="Popular Langauges for Keywords"
                    >
                      <LangaugeInPostsComponent
                        langauges={[
                          {
                            country: 'United States',
                            percentage: 80,
                            posts: 100
                          },
                          {
                            country: 'Germany',
                            percentage: 60,
                            posts: 80
                          },
                          {
                            country: 'France',
                            percentage: 40,
                            posts: 60
                          },
                          {
                            country: 'United Kingdom',
                            percentage: 20,
                            posts: 40
                          }
                        ]}
                      />
                    </ChartCardComponent>
                  )
                },
                {
                  columnWidth: 3,
                  content: (
                    <ChartCardComponent
                      classes={{ root: 'p-0', title: 'pt-3 px-3' }}
                      title="Most Popular Tags"
                    >
                      <WordList words={[{ word: 'Crypto', percentage: 100 }]} />
                    </ChartCardComponent>
                  )
                },
                {
                  columnWidth: 3,
                  content: (
                    <ChartCardComponent
                      classes={{ root: 'p-0', title: 'pt-3 px-3' }}
                      title="Most Popular Words"
                    >
                      <WordList
                        words={[
                          { word: 'Cordana', percentage: 100 },
                          { word: 'Ethereum', percentage: 100 }
                        ]}
                      />
                    </ChartCardComponent>
                  )
                },
                {
                  columnWidth: 6,
                  content: (
                    <ChartCardComponent
                      classes={{ root: 'p-3' }}
                      title="Most Popular Posts"
                    >
                      <PopularPostsComponent keywords={activeKeywords} />
                    </ChartCardComponent>
                  )
                },
                {
                  columnWidth: 6,
                  content: (
                    <ChartCardComponent
                      classes={{ root: 'p-3' }}
                      title="Active Countries"
                    >
                      <></>
                    </ChartCardComponent>
                  )
                }
              ]}
            ></FlexRow>
          </TabPanel>
          <TabPanel>
            <p>Reddit</p>
          </TabPanel>
          <TabPanel>
            <p>Twitter</p>
          </TabPanel>
        </TabPanels>
      </TabGroup>
      <main className="p-4 md:p-10 mx-auto max-w-7xl">
        {/* <Grid numItemsSm={2} numItemsLg={3} className="gap-6">
          {data.map((item) => (
            <Card key={item.category}>
              <Title>{item.category}</Title>
              <Flex
                justifyContent="start"
                alignItems="baseline"
                className="space-x-2"
              >
                <Metric>{item.stat}</Metric>
                <Text>Total views</Text>
              </Flex>
              <Flex className="mt-6">
                <Text>Pages</Text>
                <Text className="text-right">Views</Text>
              </Flex>
              <BarList
                data={item.data}
                valueFormatter={(number: number) =>
                  Intl.NumberFormat('us').format(number).toString()
                }
                className="mt-2"
              />
            </Card>
          ))}
        </Grid>
        <Chart /> */}
      </main>
    </div>
  );
}
