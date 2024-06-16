import React from 'react';
import { Title } from '@mantine/core';
import { Timeline, Text } from '@mantine/core';
import { Fa500Px } from 'react-icons/fa';

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
    <Timeline active={1} bulletSize={24} lineWidth={2}>
      {timeline.map((item, index) => (
        <Timeline.Item
          key={index}
          bullet={<Fa500Px size={12} />}
          title={<Title order={4}>{item.title}</Title>}
        >
          <Text size="sm">{item.content}</Text>
          <Text size="xs" c="dimmed" mt={4}>
            {item.date}
          </Text>
        </Timeline.Item>
      ))}
    </Timeline>
  );
};

export default ActivityTimeline;
