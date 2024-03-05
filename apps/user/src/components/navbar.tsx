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
} from '@mantine/core';

import { CartIcon } from 'packages/ui/src';
import { UserIcon } from 'packages/ui/src';
import { WishListIcon } from 'packages/ui/src';
import { SearchIcon } from 'packages/ui/src';
import { OrderIcon } from 'packages/ui/src';
import { SearchInputField } from '@ecommerce/ui';

const Navbar = () => {
  const [openDrawer, { toggle: toggleDrawer, close: closeDrawer }] =
    useDisclosure();

  return (
    <Box bg="#CF202D">
      <Container size="xl">
        <Box h="5rem" pos="sticky" top="0">
          <Group justify="space-between" align="center" h="100%">
            <Burger
              size="sm"
              opened={openDrawer}
              onClick={toggleDrawer}
              aria-label="Toggle navigation"
              hiddenFrom="lg"
              color="white"
            />

            <Text
              ta="center"
              fw="bold"
              fz="lg"
              c="white"
              component={Link}
              href="/"
            >
              Emporium
            </Text>

            <Group align="center" gap="1.5rem" visibleFrom="lg">
              <SearchInputField
                placeholder="Search..."
                icon={<SearchIcon color="#CF202D" />}
                styles={{
                  w: '300px',
                }}
              />
              <Box component={Link} href="/cart">
                <CartIcon color="#F6F6F6" />
              </Box>
              <Box component={Link} href="/">
                <OrderIcon color="#F6F6F6" />
              </Box>
              <Box component={Link} href="/">
                <WishListIcon color="#F6F6F6" />
              </Box>
              <Box component={Link} href="/">
                <UserIcon color="#F6F6F6" />
              </Box>
            </Group>

            <Flex hiddenFrom="lg" component={Link} href="/cart">
              <CartIcon fontSize="20px" color="#F6F6F6" />
            </Flex>
          </Group>
        </Box>

        <Drawer
          hiddenFrom="lg"
          opened={openDrawer}
          onClose={closeDrawer}
          size="60%"
          overlayProps={{ backgroundOpacity: 0.5, blur: 4 }}
        ></Drawer>
      </Container>
    </Box>
  );
};

export default Navbar;
