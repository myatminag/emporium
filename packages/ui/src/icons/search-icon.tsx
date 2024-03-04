import { SVGProps } from 'react';

export const SearchIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      fill="none"
      viewBox="0 0 18 18"
      {...props}
    >
      <g clipPath="url(#clip0_28_1450)">
        <path
          fill="currentColor"
          d="M17.39 16.32l-3.77-3.77a7.44 7.44 0 001.68-4.71c0-4.11-3.34-7.45-7.45-7.45S.39 3.73.39 7.85s3.34 7.45 7.46 7.45c1.78 0 3.42-.63 4.71-1.68l3.77 3.77c.15.15.34.22.53.22s.39-.07.53-.22c.3-.29.3-.76 0-1.06v-.01zm-4.84-4.84c-.3.4-.66.76-1.06 1.06a5.936 5.936 0 01-3.64 1.25c-3.29 0-5.96-2.67-5.96-5.95 0-3.28 2.67-5.95 5.96-5.95a5.945 5.945 0 014.7 9.59z"
        ></path>
      </g>
      <defs>
        <clipPath id="clip0_28_1450">
          <path fill="#fff" d="M0 0H18V18H0z"></path>
        </clipPath>
      </defs>
    </svg>
  );
};
