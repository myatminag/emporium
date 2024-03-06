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
  Group,
  Badge,
  Box,
} from '@mantine/core';
import { Carousel } from '@mantine/carousel';

import classes from '../styles/home.module.css';
import { NextControlIcon, PreviousControlIcon } from '@ecommerce/ui';
import { RightChevronIcon } from '@ecommerce/ui';

import ProductImage from '../assets/image 34.png';
import ProductImageTwo from '../assets/image-1.png';
import BannerOne from '../assets/dummy/banner-1.png';
import Banner from '../assets/dummy/banner.png';
import Cateogry from '../assets/dummy/category.png';

const PRIMARY_COL_HEIGHT = rem(300);

export default function Index() {
  const SECONDARY_COL_HEIGHT = `calc(${PRIMARY_COL_HEIGHT} / 2 - var(--mantine-spacing-md) / 2)`;

  return (
    <Stack py="3rem" gap="xl">
      <SimpleGrid cols={{ base: 1, sm: 2 }} spacing="md">
        <Image
          src={Banner}
          width={500}
          height={500}
          alt="banner"
          style={{
            height: PRIMARY_COL_HEIGHT,
            objectFit: 'cover',
            width: '100%',
            borderRadius: '10px',
          }}
        />
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
            <Image
              src={BannerOne}
              width={500}
              height={500}
              alt="banner"
              style={{
                height: SECONDARY_COL_HEIGHT,
                objectFit: 'cover',
                width: '100%',
                borderRadius: '10px',
              }}
            />
          </Grid.Col>
        </Grid>
      </SimpleGrid>

      <Stack>
        <Group justify="space-between" align="center">
          <Title order={2}>Categories</Title>
          <Group gap="xs">
            <Text fz="base">View All</Text>
            <RightChevronIcon color="#0059DC" />
          </Group>
        </Group>
        <SimpleGrid cols={{ base: 2, lg: 6 }} spacing="md">
          {[...Array(6)].map((_, i) => (
            <Group
              key={i}
              justify="center"
              bg="#F5F5F5"
              style={{ borderRadius: '10px' }}
            >
              <Text fw={500}>
                Smart <br /> Watches
              </Text>
              <Image
                src={Cateogry}
                width={100}
                height={100}
                alt="category"
                style={{
                  objectFit: 'contain',
                  width: '70px',
                }}
              />
            </Group>
          ))}
        </SimpleGrid>
      </Stack>

      <Stack gap="xs">
        <Group justify="space-between" align="center">
          <Title order={2}>New Arrivals</Title>
          <Group gap="xs">
            <Text fz="base">View All</Text>
            <RightChevronIcon color="#0059DC" />
          </Group>
        </Group>
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
              <Card radius="md" withBorder>
                <Card.Section
                  h="180px"
                  bg="#F5F5F5"
                  className={classes.cardSection}
                >
                  <Image
                    src={ProductImage}
                    alt="product-image"
                    width={500}
                    height={500}
                    style={{
                      objectFit: 'contain',
                      width: '100%',
                      scale: 0.9,
                    }}
                  />
                </Card.Section>

                <Stack gap={3} pt="10px">
                  <Text fz="sm" c="#606060">
                    Category
                  </Text>
                  <Text fw={400} lineClamp={2} fz="base" c="#606060">
                    GoPro HERO6 4K Action Camera - Black
                  </Text>
                  <Text fz="base" fw={500}>
                    780,000 MMK
                  </Text>
                </Stack>
              </Card>
            </Carousel.Slide>
          ))}
        </Carousel>
      </Stack>

      <Stack gap="xs">
        <Group justify="space-between" align="center">
          <Title order={2}>Promotions</Title>
          <Group gap="xs" mt="5px">
            <Text fz="base">View All</Text>
            <RightChevronIcon color="#0059DC" />
          </Group>
        </Group>
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
              <Card radius="md" withBorder>
                <Card.Section
                  bg="#F5F5F5"
                  className={classes.cardSection}
                  h="180px"
                >
                  <Image
                    src={ProductImageTwo}
                    alt="product-image"
                    width={500}
                    height={500}
                    style={{
                      objectFit: 'contain',
                      width: '100%',
                      scale: 0.9,
                    }}
                  />
                </Card.Section>

                <Badge className={classes.promotion} bg="#FFE3E3">
                  <Text fz="sm" fw={600} c="#EB001B">
                    5% Off
                  </Text>
                </Badge>

                <Stack gap={3} pt="10px">
                  <Text fz="sm" c="#606060">
                    Category
                  </Text>
                  <Text fw={400} lineClamp={2} fz="base" c="#606060">
                    GoPro HERO6 4K Action Camera - Black
                  </Text>
                  <Text fz="base" fw={500}>
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
