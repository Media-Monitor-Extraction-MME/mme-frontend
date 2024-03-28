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
import { FlexRow } from './components/flexRow';
import { SparkChartComponent } from './components/sparkChartComponent';
import { LineChartComponent } from './components/lineChartComponent';
import { SelectComponent } from './components/selectComponent';
import { ChartCardComponent } from './components/chartCardComponent';
import { PopularPostsComponent } from './components/popularPostsComponent';
import { LangaugeInPostsComponent } from './components/langaugeInPostsComponent';
import { WordList } from './components/WordList';

export default function PlaygroundPage() {
  return (
    <div className="p-4">
      <h1 className="pb-10 pt-5 text-4xl font-bold">Dashboard</h1>
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
              numItems={6}
              className="gap-6"
              columns={[
                {
                  columnWidth: 2,
                  content: (
                    <Card>
                      <SparkChartComponent
                        name={'Keyword Activity'}
                        activity={[
                          { weekNumber: 1, activity: 23918 },
                          { weekNumber: 2, activity: 10343 },
                          { weekNumber: 3, activity: 23918 },
                          { weekNumber: 4, activity: 10343 }
                        ]}
                      />
                    </Card>
                  )
                },
                {
                  columnWidth: 2,
                  content: (
                    <Card>
                      <SparkChartComponent
                        name={'Positive Mentions'}
                        activity={[
                          { weekNumber: 1, activity: 23918 },
                          { weekNumber: 2, activity: 10343 },
                          { weekNumber: 3, activity: 23918 },
                          { weekNumber: 4, activity: 30000 }
                        ]}
                      />
                    </Card>
                  )
                },
                {
                  columnWidth: 2,
                  content: (
                    <Card>
                      <SparkChartComponent
                        name={'Negative Mentions'}
                        activity={[
                          { weekNumber: 1, activity: 23918 },
                          { weekNumber: 2, activity: 10343 },
                          { weekNumber: 3, activity: 23918 },
                          { weekNumber: 4, activity: 10343 }
                        ]}
                      />
                    </Card>
                  )
                },
                {
                  columnWidth: 4,
                  content: (
                    <ChartCardComponent
                      classes={{ root: 'p-3' }}
                      title="Social Media Activity"
                    >
                      <LineChartComponent curveType="monotone" />
                    </ChartCardComponent>
                  )
                },
                {
                  columnWidth: 2,
                  content: (
                    <ChartCardComponent
                      classes={{ title: 'p-3' }}
                      title="Most Popular Words"
                    >
                      <WordList
                        words={[
                          { word: 'Bitcoin', percentage: 80 },
                          { word: 'Bitcoin', percentage: 80 }
                        ]}
                      />
                    </ChartCardComponent>
                  )
                },
                {
                  columnWidth: 3,
                  content: (
                    <ChartCardComponent
                      classes={{ root: 'p-3' }}
                      title="Most Popular Posts for Keywords"
                    >
                      <PopularPostsComponent
                        posts={[
                          {
                            platform: 'twitter',
                            title:
                              'The Federal government will pay for the ENTIRE cost of reconstructing that bridge',
                            content:
                              "Why isn't the insurance company of that vessel paying for any part of the damages? Why would the Fed government foot the bill?",
                            postedAt: new Date()
                          },
                          {
                            platform: 'reddit',
                            content:
                              'Alright I’m still in a bit of shock but want to keep you all updated. A few weeks ago I went in to a dermatologist for an annual skin/mole check that Jess proactively scheduled for me. There was a mole on the bottom of my foot that they wanted to remove just to be careful. It came back as melanoma, but they are optimistic that we caught it in the early stages. I had another dark spot appear near it, so today they biopsied that and removed a larger area around the melanoma with the hopes that under the microscope they will see clear non-melanoma edges and we will know we got it. I’m grateful to have hope in finding this early, but please take this as a PSA to get skin checkups.',
                            postedAt: new Date()
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
                  columnWidth: 2,
                  content: (
                    <ChartCardComponent
                      classes={{ root: 'p-3' }}
                      title="Most Active Time"
                    >
                      <></>
                    </ChartCardComponent>
                  )
                },
                {
                  columnWidth: 4,
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
