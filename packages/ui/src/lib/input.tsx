import { MantineStyleProps, TextInput, PasswordInput } from '@mantine/core';

interface InputProps {
  label: string;
  placeholder: string;
  size: string;
  styles?: MantineStyleProps;
}

export const TextInputField = ({
  label,
  placeholder,
  size,
  styles,
}: InputProps) => {
  return (
    <TextInput
      label={label}
      placeholder={placeholder}
      size={size}
      {...styles}
    />
  );
};

export const PasswordInputField = ({
  label,
  placeholder,
  size,
  styles,
}: InputProps) => {
  return (
    <PasswordInput
      label={label}
      placeholder={placeholder}
      size={size}
      {...styles}
    />
  );
};
