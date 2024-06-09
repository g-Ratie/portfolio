import React from 'react';
import TimelineItem from './TimelineItem';

const Timeline = () => {
  return (
    <div>
      <TimelineItem
        title="New branch"
        description="You've created new branch fix-notifications from master"
        time="2 hours ago"
      />
      <TimelineItem
        title="Commits"
        description="You've pushed 23 commits to fix-notifications branch"
        time="52 minutes ago"
      />
      <TimelineItem
        title="Pull request"
        description="You've submitted a pull request"
        time="34 minutes ago"
      />
      <TimelineItem
        title="Code review"
        description="Robert Gluesticker left a code review on your pull request"
        time="12 minutes ago"
        lastItem={true}
      />
    </div>
  );
};

export default Timeline;
