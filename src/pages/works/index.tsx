import React from 'react';
import Title from '../../component/Title';
import Layout from '../../layouts/Layout';
import { ProductCard } from '../../component/ProductCard';
import { SimpleGrid } from '@mantine/core';
import cardsData from '../../data/myProduct';

const App: React.FC = () => {
  return (
    <Layout>
      <Title title="Works" />
      <SimpleGrid
        cols={{ base: 2, lg: 3 }}
        spacing={{ base: 10, sm: 'xl' }}
        verticalSpacing={{ base: 'md', sm: 'xl' }}
      >
        {cardsData.map((card, index) => (
          <ProductCard key={index} {...card} />
        ))}
      </SimpleGrid>
    </Layout>
  );
};

export default App;
