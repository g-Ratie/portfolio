import { Card, Image, Text, Group, Badge, Button, ActionIcon } from '@mantine/core';
import { FaGithub } from 'react-icons/fa';
import classes from './ProductCard.module.css';

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

export const ProductCard = ({ image, title, description, tag }: ProductCardProps) => {
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
          <Badge size="sm" variant="light" color={tag.color}>
            {tag.title}
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
