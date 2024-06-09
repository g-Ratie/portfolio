import React from 'react';
import styles from './TimelineItem.module.css';

interface TimelineItemProps {
  title: string;
  description: string;
  time: string;
  lastItem?: boolean;
}

const TimelineItem: React.FC<TimelineItemProps> = ({
  title,
  description,
  time,
  lastItem = false,
}) => {
  return (
    <div className={styles.container}>
      <div className={styles.timeline}>
        <div className={lastItem ? styles.circleDotted : styles.circle} />
      </div>
      <div className={styles.details}>
        <div className={styles.title}>{title}</div>
        <div className={styles.description}>{description}</div>
        <div className={styles.time}>{time}</div>
      </div>
    </div>
  );
};

export default TimelineItem;
