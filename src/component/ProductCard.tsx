import { ActionIcon, Badge, Card, Group, Image, Text } from '@mantine/core';
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

export const ProductCard: React.FC<ProductCardProps> = ({
  image,
  githubUrl,
  title,
  description,
  tag,
}) => {
  return (
    <Card withBorder radius="md" p="md" className={classes.card}>
      <div>
        <Card.Section>
          <Image src={image || 'https://via.placeholder.com/180'} alt={title} height={180} />
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
          <Text fz="sm" mt="xs" style={{ minHeight: '80px' }}>
            {description}
          </Text>
        </Card.Section>
      </div>

      <Group mt="xs" style={{ justifyContent: 'flex-end' }}>
        {/* <Button disabled radius="md" style={{ flex: 1 }}>
          Show details
        </Button> */}
        {githubUrl && (
          <ActionIcon
            component="a"
            href={githubUrl}
            target="_blank"
            variant="default"
            radius="md"
            size={36}
          >
            <FaGithub />
          </ActionIcon>
        )}
      </Group>
    </Card>
  );
};
