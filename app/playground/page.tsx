'use client';

import {
  Card,
  Metric,
  Text,
  Title,
  BarList,
  Flex,
  Grid,
  TabGroup,
  Tab,
  TabList,
  TabPanels,
  TabPanel
} from '@tremor/react';
import Chart from './chart';
import { FlexRow } from '../components/flexRow';
import { SparkChartComponent } from '../components/sparkChartComponent';
import { LineChartComponent } from '../components/lineChartComponent';

export default function PlaygroundPage() {
  return (
    <div className="p-4">
      <h1 className="pb-10 pt-5 text-4xl font-bold">Dashboard</h1>
      <TabGroup>
        <TabList>
          <Tab>Overview</Tab>
          <Tab>Reddit</Tab>
          <Tab>Twitter</Tab>
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
                      <SparkChartComponent />
                    </Card>
                  )
                },
                {
                  columnWidth: 2,
                  content: (
                    <Card>
                      <SparkChartComponent />
                    </Card>
                  )
                },
                {
                  columnWidth: 2,
                  content: (
                    <Card>
                      <SparkChartComponent />
                    </Card>
                  )
                },
                {
                  columnWidth: 4,
                  content: (
                    <Card>
                      <LineChartComponent />
                    </Card>
                  )
                },
                {
                  columnWidth: 2,
                  content: <Card>{/* Card content */}</Card>
                },
                {
                  columnWidth: 3,
                  content: <Card>{/* Card content */}</Card>
                },
                {
                  columnWidth: 3,
                  content: <Card>{/* Card content */}</Card>
                },
                {
                  columnWidth: 2,
                  content: <Card>{/* Card content */}</Card>
                },
                {
                  columnWidth: 4,
                  content: <Card>{/* Card content */}</Card>
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
