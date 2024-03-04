'use client';

import Link from 'next/link';
import { Text, Title, Stack, Center, Flex } from '@mantine/core';

import { TextInputField, ButtonFilled } from 'packages/ui/src';

const ResetPassword = () => {
  return (
    <Center maw="100vw" h="100vh">
      <Stack
        w={{
          base: '300px',
          lg: '400px',
        }}
      >
        <Title order={2} fw={500} ta="center">
          Reset password
        </Title>
        <TextInputField
          label="Email"
          placeholder="Enter your email"
          size="md"
          withAsterisk
        />
        <ButtonFilled size="md" text="Submit" />
        <Flex align="center" justify="center" gap="5px">
          <Text fz="md">Back to</Text>
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

export default ResetPassword;
