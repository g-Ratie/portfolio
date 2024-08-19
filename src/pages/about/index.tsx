import React from 'react';
import Title from '../../component/Title';
import Content from '../../component/about/Section';
import ActivityTimeline from '../../component/timeline/Timeline';
import myActivity from '../../data/myactivity';
import Layout from '../../layouts/Layout';

const App: React.FC = () => {
  return (
    <Layout>
      <Title title="About" />
      <Content
        sections={[
          {
            title: '自己紹介',
            text: 'ラティといいます。Web開発が好きで、TypeScriptを使っていろいろするのが好きです。',
          },
          {
            title: '興味',
            text: 'TypeScript / React / Next.js / Bun / CloudFlare Workers / GitHub Actions',
          },
          {
            title: '好き',
            text: 'キーボード, ガジェット, アイドルマスター(シャニマス | 学マス), 少女☆歌劇 レヴュースタァライト',
          },
        ]}
      />
      <ActivityTimeline timeline={myActivity.myactivity} />
    </Layout>
  );
};

export default App;
