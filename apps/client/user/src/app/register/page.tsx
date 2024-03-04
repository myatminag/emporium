'use client';

import Link from 'next/link';
import { Flex, Text, Title, Stack, Center } from '@mantine/core';

import {
  TextInputField,
  PasswordInputField,
  ButtonFilled,
} from 'packages/ui/src';

const Register = () => {
  return (
    <Center maw="100vw" h="100vh">
      <Stack
        w={{
          base: '300px',
          lg: '400px',
        }}
      >
        <Title order={2} fw={500} ta="center">
          Register
        </Title>
        <TextInputField
          label="Username"
          placeholder="Enter your username"
          size="md"
          withAsterisk
        />
        <TextInputField
          label="Phone Number"
          placeholder="Enter your phone number"
          size="md"
          withAsterisk
        />
        <TextInputField
          label="Email"
          placeholder="Enter your email"
          size="md"
          withAsterisk
        />
        <PasswordInputField
          label="Password"
          placeholder="Enter password"
          size="md"
          withAsterisk
        />
        <PasswordInputField
          label="Confirm Password"
          placeholder="Enter confirm password"
          size="md"
          withAsterisk
        />
        <ButtonFilled size="md" text="Register" />
        <Flex align="center" justify="center" gap="5px">
          <Text fz="md">Already have an account? </Text>
          <Text
            fz="md"
            c="primary.5"
            component={Link}
            href="/login"
            td="underline"
          >
            Login
          </Text>
        </Flex>
      </Stack>
    </Center>
  );
};

export default Register;
