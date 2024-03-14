import { SVGProps } from 'react';

export const LoyaltyIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="none"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        stroke="currentColor"
        d="M21 5.25H3a.75.75 0 00-.75.75v12c0 .414.336.75.75.75h18a.75.75 0 00.75-.75V6a.75.75 0 00-.75-.75zm-5.25 10.5h3m-7.5 0h1.5M2.25 9.084h19.5"
      ></path>
    </svg>
  );
};
