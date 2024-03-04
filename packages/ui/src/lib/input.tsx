import { MantineStyleProps, TextInput, PasswordInput } from '@mantine/core';

interface InputProps {
  label: string;
  placeholder: string;
  size: string;
  withAsterisk: boolean;
  styles?: MantineStyleProps;
}

export const TextInputField = ({
  label,
  placeholder,
  size,
  withAsterisk,
  styles,
}: InputProps) => {
  return (
    <TextInput
      label={label}
      placeholder={placeholder}
      size={size}
      withAsterisk={withAsterisk}
      {...styles}
    />
  );
};

export const PasswordInputField = ({
  label,
  placeholder,
  size,
  withAsterisk,
  styles,
}: InputProps) => {
  return (
    <PasswordInput
      label={label}
      placeholder={placeholder}
      size={size}
      withAsterisk={withAsterisk}
      {...styles}
    />
  );
};
