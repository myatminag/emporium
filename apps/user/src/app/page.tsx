'use client';

import Image from 'next/image';
import {
  Text,
  Grid,
  SimpleGrid,
  Skeleton,
  Stack,
  Title,
  rem,
  Card,
} from '@mantine/core';
import { Carousel } from '@mantine/carousel';

import classes from '../styles/carousel.module.css';
import { NextControlIcon, PreviousControlIcon } from '@ecommerce/ui';

import ProductImage from '../assets/image 34.png';

const PRIMARY_COL_HEIGHT = rem(300);

export default function Index() {
  const SECONDARY_COL_HEIGHT = `calc(${PRIMARY_COL_HEIGHT} / 2 - var(--mantine-spacing-md) / 2)`;

  return (
    <Stack py="3rem" gap="xl">
      <SimpleGrid cols={{ base: 1, sm: 2 }} spacing="md">
        <Skeleton height={PRIMARY_COL_HEIGHT} radius="md" animate={false} />
        <Grid gutter="md">
          <Grid.Col>
            <Skeleton
              height={SECONDARY_COL_HEIGHT}
              radius="md"
              animate={false}
            />
          </Grid.Col>
          <Grid.Col span={6}>
            <Skeleton
              height={SECONDARY_COL_HEIGHT}
              radius="md"
              animate={false}
            />
          </Grid.Col>
          <Grid.Col span={6}>
            <Skeleton
              height={SECONDARY_COL_HEIGHT}
              radius="md"
              animate={false}
            />
          </Grid.Col>
        </Grid>
      </SimpleGrid>

      <Stack gap="xs">
        <Title order={2}>New Arrival</Title>
        <Text>Browse the best of our new arrivals.</Text>
        <Carousel
          loop
          dragFree
          align="start"
          slideGap="md"
          withIndicators
          slideSize={{ base: '50%', md: '33.333333%', lg: '16.66%' }}
          classNames={classes}
          nextControlIcon={<NextControlIcon />}
          previousControlIcon={<PreviousControlIcon />}
        >
          {[...Array(8)].map((_, i) => (
            <Carousel.Slide key={i}>
              <Card radius="md" bg="#ffffff" withBorder>
                <Card.Section
                  withBorder
                  className={classes.card}
                  h={{
                    base: '180px',
                  }}
                >
                  <Image
                    src={ProductImage}
                    height={300}
                    width={500}
                    alt="product-image"
                    style={{
                      width: '100%',
                      objectFit: 'cover',
                      scale: '0.8',
                    }}
                  />
                </Card.Section>

                <Stack gap={3} pt="5px">
                  <Text fw={400} lineClamp={2} fz="base">
                    GoPro HERO6 4K Action Camera - Black
                  </Text>
                  <Text fz="base" fw={500} c="#CF202D">
                    780,000 MMK
                  </Text>
                </Stack>
              </Card>
            </Carousel.Slide>
          ))}
        </Carousel>
      </Stack>
    </Stack>
  );
}
