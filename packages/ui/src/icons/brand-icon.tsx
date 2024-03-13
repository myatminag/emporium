import { SVGProps } from 'react';

export const BrandIcon = (props: SVGProps<SVGSVGElement>) => {
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
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M20.25 12v4.5M18 14.25h4.5M7.875 3.75V7.5M6 5.625h3.75M15.75 17.25v3M14.25 18.75h3M17.477 3.528L3.537 17.469a.75.75 0 000 1.06l1.938 1.94a.75.75 0 001.061 0L20.477 6.528a.75.75 0 000-1.061l-1.939-1.939a.75.75 0 00-1.06 0zM13.5 7.5l3 3"
      ></path>
    </svg>
  );
};
