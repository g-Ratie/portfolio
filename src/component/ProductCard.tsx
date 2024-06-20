import { Card, Image, Text, Group, Badge, Button, ActionIcon } from '@mantine/core';
import { FaGithub } from 'react-icons/fa';
import classes from './ProductCard.module.css';

const mockdata = {
  image:
    'https://images.unsplash.com/photo-1437719417032-8595fd9e9dc6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80',
  title: 'Verudela Beach',
  country: 'Croatia',
  description:
    'Completely renovated for the season 2020, Arena Verudela Bech Apartments are fully equipped and modernly furnished 4-star.',
};

type Tag = {
  title: string;
  color: string;
};

export type ProductCardProps = {
  image: string | null;
  githubUrl: string | null;
  title: string;
  description: string;
  tag: Tag;
};

export const ProductCard = () => {
  const { image, title, description, country } = mockdata;

  return (
    <Card withBorder radius="md" p="md" className={classes.card}>
      <Card.Section>
        <Image src={image} alt={title} height={180} />
      </Card.Section>

      <Card.Section className={classes.section} mt="md">
        <Group justify="apart">
          <Text fz="lg" fw={500}>
            {title}
          </Text>
          <Badge size="sm" variant="light">
            {country}
          </Badge>
        </Group>
        <Text fz="sm" mt="xs">
          {description}
        </Text>
      </Card.Section>

      <Group mt="xs">
        <Button radius="md" style={{ flex: 1 }}>
          Show details
        </Button>
        <ActionIcon variant="default" radius="md" size={36}>
          <FaGithub />
        </ActionIcon>
      </Group>
    </Card>
  );
};
