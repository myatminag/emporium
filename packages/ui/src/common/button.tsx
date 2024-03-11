import { Button } from '@nextui-org/react';

interface PrimaryBtnProps {
  text: string;
}

export const PrimaryBtn = ({ text }: PrimaryBtnProps) => {
  return (
    <Button color="primary" variant="solid">
      {text}
    </Button>
  );
};
