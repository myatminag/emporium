'use client';

import { Box, Flex, Text, Title, Stack } from '@mantine/core';

import {
  TextInputField,
  PasswordInputField,
  ButtonFilled,
} from 'packages/ui/src';

const Login = () => {
  return (
    <Flex
      align="center"
      justify="center"
      direction={{
        base: 'column',
        lg: 'row',
      }}
    >
      <Box
        w="100vw"
        h={{
          base: '50vh',
          lg: '100vh',
        }}
        bg="primary.7"
      ></Box>

      <Flex
        direction="column"
        align="center"
        justify="center"
        w="100vw"
        h={{
          base: '50vh',
          lg: '100vh',
        }}
      >
        <Stack
          w={{
            base: '300px',
            lg: '400px',
          }}
        >
          <Title order={2} fw={500}>
            Login
          </Title>
          <TextInputField
            label="Email"
            placeholder="Enter your email"
            size="md"
          />
          <PasswordInputField
            label="Password"
            placeholder="Enter your password"
            size="md"
          />
          <Text fz="sm" td="underline" c="primary.7">
            Forgot Password?
          </Text>
          <ButtonFilled size="md" text="Login" />
          <Flex align="center" gap="5px">
            <Text fz="md">Don&apos;t have an account? </Text>
            <Text fz="md" c="primary.5">
              Create account
            </Text>
          </Flex>
        </Stack>
      </Flex>
    </Flex>
  );
};

export default Login;
