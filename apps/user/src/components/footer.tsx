'use client';

import {
  MainLogo,
  FacebookIcon,
  TwitterIcon,
  YoutubeIcon,
  AppStoreIcon,
  PlayStoreIcon,
} from '@ecommerce/ui';

const data = [
  {
    title: 'About',
    links: [
      { label: 'Features', link: '#' },
      { label: 'Pricing', link: '#' },
      { label: 'Support', link: '#' },
      { label: 'Forums', link: '#' },
    ],
  },
  {
    title: 'Project',
    links: [
      { label: 'Contribute', link: '#' },
      { label: 'Media assets', link: '#' },
      { label: 'Changelog', link: '#' },
      { label: 'Releases', link: '#' },
    ],
  },
  {
    title: 'Community',
    links: [
      { label: 'Join Discord', link: '#' },
      { label: 'Follow on Twitter', link: '#' },
      { label: 'Email newsletter', link: '#' },
      { label: 'GitHub discussions', link: '#' },
    ],
  },
];

const Footer = () => {
  // const groups = data.map((group) => {
  //   const links = group.links.map((link, index) => (
  //     <Text<'a'>
  //       key={index}
  //       component="a"
  //       href={link.link}
  //       onClick={(event) => event.preventDefault()}
  //     >
  //       {link.label}
  //     </Text>
  //   ));

  //   return (
  //     <Stack key={group.title}>
  //       <Text>{group.title}</Text>
  //       {links}
  //     </Stack>
  //   );
  // });

  return (
    <>
      {/* <Container size="lg" pt={{ base: 'md', lg: '3rem' }}>
        <Group justify="space-between" align="start">
          <Stack maw="300px">
            <Group gap="xs">
              <MainLogo />
              <Text ta="center" fw="bold" fz="xl" c="#EB001B">
                Emporium
              </Text>
            </Group>
            <Text c="#606060" fz="base">
              Best information about the company gies here but now lorem ipsum
              is
            </Text>
            <Group wrap="nowrap">
              <ActionIcon size="lg" color="gray" variant="subtle">
                <TwitterIcon />
              </ActionIcon>
              <ActionIcon size="lg" color="gray" variant="subtle">
                <FacebookIcon />
              </ActionIcon>
              <ActionIcon size="lg" color="gray" variant="subtle">
                <YoutubeIcon />
              </ActionIcon>
            </Group>
          </Stack>
          <Group gap="5rem" align="start">
            <Stack>
              <Title order={4}>About</Title>
              <Text c="#606060" fz="base">
                About Us
              </Text>
              <Text c="#606060" fz="base">
                Categories
              </Text>
              <Text c="#606060" fz="base">
                Find Store
              </Text>
              <Text c="#606060" fz="base">
                About Us
              </Text>
            </Stack>
            <Stack>
              <Title order={4}>Users</Title>
              <Text c="#606060" fz="base">
                Login
              </Text>
              <Text c="#606060" fz="base">
                Register
              </Text>
              <Text c="#606060" fz="base">
                Profile
              </Text>
              <Text c="#606060" fz="base">
                Orders
              </Text>
            </Stack>
            <Stack>
              <Title order={4}>Information</Title>
              <Text c="#606060" fz="base">
                Support
              </Text>
              <Text c="#606060" fz="base">
                Shipping
              </Text>
              <Text c="#606060" fz="base">
                Refund
              </Text>
              <Text c="#606060" fz="base">
                Contact Us
              </Text>
            </Stack>
            <Stack>
              <Title order={4}>Get App</Title>
              <AppStoreIcon />
              <PlayStoreIcon />
            </Stack>
          </Group>
        </Group>
      </Container>

      <Container size="lg" pb={{ base: 'md', lg: 'xl' }}>
        <Divider my="xl" />

        <Text c="dimmed" size="sm" ta="center">
          © {new Date().getFullYear()} Emporium all rights reserved.
        </Text>
      </Container> */}
    </>
  );
};

export default Footer;
