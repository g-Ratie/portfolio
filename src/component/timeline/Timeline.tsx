import React from 'react';
import { Title } from '@mantine/core';
import { Timeline, Text } from '@mantine/core';

type Timeline = {
  title: string;
  content: string;
  date: string;
};

type TimelineProps = {
  timeline: Timeline[];
};

const ActivityTimeline = ({ timeline }: TimelineProps) => {
  return (
    <>
      <h2>今までの主な活動</h2>
      <Timeline active={0} bulletSize={24} lineWidth={2}>
        {timeline.map((item, index) => (
          <Timeline.Item key={index} title={<Title order={4}>{item.title}</Title>}>
            <Text size="sm">{item.content}</Text>
            <Text size="xs" c="dimmed" mt={4}>
              {item.date}
            </Text>
          </Timeline.Item>
        ))}
      </Timeline>
    </>
  );
};

export default ActivityTimeline;
