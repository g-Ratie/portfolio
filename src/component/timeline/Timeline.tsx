import { Text, Timeline, Title } from '@mantine/core';
import { FaTrophy } from 'react-icons/fa';

type Timeline = {
  title: string;
  content: string;
  date: string;
  isprize?: boolean;
};

type TimelineProps = {
  timeline: Timeline[];
};

const ActivityTimeline = ({ timeline }: TimelineProps) => {
  return (
    <>
      <h2 id="activity">今までの主な活動</h2>
      <Timeline active={0} bulletSize={32} lineWidth={2}>
        {timeline.map((item, index) => (
          <Timeline.Item
            bullet={item.isprize ?? false ? <FaTrophy style={{ color: '#ffffff' }} /> : null}
            key={index}
            title={<Title order={4}>{item.title}</Title>}
          >
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
