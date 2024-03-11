import { SVGProps } from 'react';

export const MailIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="22"
      height="22"
      fill="none"
      viewBox="0 0 22 22"
      {...props}
    >
      <path
        fill="currentColor"
        d="M20.167 5.5a1.839 1.839 0 00-1.834-1.833H3.667A1.839 1.839 0 001.833 5.5v11c0 1.008.825 1.833 1.834 1.833h14.666a1.839 1.839 0 001.834-1.833v-11zm-1.834 0L11 10.083 3.667 5.5h14.666zm0 11H3.667V7.333L11 11.917l7.333-4.584V16.5z"
      ></path>
    </svg>
  );
};
