import { SVGProps } from 'react';

export const WishListIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      fill="none"
      viewBox="0 0 32 32"
      {...props}
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M16 27S3.5 20 3.5 11.5A6.5 6.5 0 0116 9a6.5 6.5 0 0112.5 2.5C28.5 20 16 27 16 27z"
      ></path>
    </svg>
  );
};
