'use client';

import Link from 'next/link';
import { Flex, Text, Title, Stack, Center } from '@mantine/core';

import {
  TextInputField,
  PasswordInputField,
  ButtonFilled,
} from 'packages/ui/src';

const Login = () => {
  return (
    <Center maw="100vw" h="100vh">
      <Stack
        w={{
          base: '300px',
          lg: '400px',
        }}
      >
        <Title order={2} fw={500} ta="center">
          Login
        </Title>
        <TextInputField
          label="Email"
          placeholder="Enter your email"
          size="md"
          withAsterisk
        />
        <PasswordInputField
          label="Password"
          placeholder="Enter your password"
          size="md"
          withAsterisk
        />
        <Text
          fz="base"
          td="underline"
          c="primary.7"
          ta="center"
          component={Link}
          href="/reset-password"
        >
          Forgot your password?
        </Text>
        <ButtonFilled size="md" text="Login" />
        <Flex align="center" justify="center" gap="5px">
          <Text fz="md">Don&apos;t have an account? </Text>
          <Text
            fz="md"
            c="primary.5"
            component={Link}
            href="/register"
            td="underline"
          >
            Create account
          </Text>
        </Flex>
      </Stack>
    </Center>
  );
};

export default Login;
