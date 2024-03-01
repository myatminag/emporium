import { MantineStyleProps, Button } from '@mantine/core';

interface Props {
  text: string;
  size: string;
  styles?: MantineStyleProps;
}

export const ButtonFilled = ({ text, size, styles }: Props) => {
  return (
    <Button variant="filled" size={size} {...styles}>
      {text}
    </Button>
  );
};
