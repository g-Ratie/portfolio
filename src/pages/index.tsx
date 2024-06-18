import React from 'react';
import Layout from '../layouts/Layout';
import ActivityTimeline from '../component/timeline/Timeline';
import Title from '../component/Title';
import myActivity from '../data/myactivity';

const App: React.FC = () => {
  return (
    <Layout>
      <Title title="Home" />
      <ActivityTimeline timeline={myActivity.myactivity} />
    </Layout>
  );
};

export default App;
