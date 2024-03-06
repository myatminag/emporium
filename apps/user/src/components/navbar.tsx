'use client';

import Link from 'next/link';
import { useDisclosure } from '@mantine/hooks';
import {
  Text,
  Burger,
  Group,
  Drawer,
  Container,
  Flex,
  Box,
  Paper,
} from '@mantine/core';

import { CartIcon } from 'packages/ui/src';
import { UserIcon } from 'packages/ui/src';
import { WishListIcon } from 'packages/ui/src';
import { SearchIcon } from 'packages/ui/src';
import { OrderIcon } from 'packages/ui/src';
import { SearchInputField } from '@ecommerce/ui';
import { MainLogo } from 'packages/ui/src';

const Navbar = () => {
  const [openDrawer, { toggle: toggleDrawer, close: closeDrawer }] =
    useDisclosure();

  return (
    <Paper
      shadow="xs"
      py="16px"
      pos="sticky"
      top="0"
      w="100%"
      radius="none"
      style={{ zIndex: '100' }}
    >
      <Container size="xl">
        <Group justify="space-between" align="center" h="100%">
          <Group gap="sm">
            <Burger
              size="sm"
              opened={openDrawer}
              onClick={toggleDrawer}
              aria-label="Toggle navigation"
              hiddenFrom="lg"
              color="#111827"
            />

            <Group gap="xs">
              <MainLogo />
              <Text
                ta="center"
                fw="bold"
                fz="xl"
                c="primary.7"
                component={Link}
                href="/"
              >
                Emporium
              </Text>
            </Group>
          </Group>

          <Group align="center" gap="1.5rem" visibleFrom="lg">
            <SearchInputField
              placeholder="Search..."
              icon={<SearchIcon color="#0059DC" />}
              styles={{
                w: '300px',
              }}
            />
            <Box component={Link} href="/cart">
              <CartIcon color="#111827" />
            </Box>
            <Box component={Link} href="/">
              <OrderIcon color="#111827" />
            </Box>
            <Box component={Link} href="/">
              <WishListIcon color="#111827" />
            </Box>
            <Box component={Link} href="/">
              <UserIcon color="#111827" />
            </Box>
          </Group>

          <Flex hiddenFrom="lg" component={Link} href="/cart">
            <CartIcon fontSize="20px" color="#111827" />
          </Flex>
        </Group>

        <Drawer
          hiddenFrom="lg"
          opened={openDrawer}
          onClose={closeDrawer}
          size="60%"
          overlayProps={{ backgroundOpacity: 0.5, blur: 4 }}
        ></Drawer>
      </Container>
    </Paper>
  );
};

export default Navbar;
