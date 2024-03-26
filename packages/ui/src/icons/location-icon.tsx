import { SVGProps } from 'react';

export const LocationIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="none"
      viewBox="0 0 24 24"
      {...props}
    >
      <g clipPath="url(#clip0_26_6934)">
        <path
          fill="currentColor"
          d="M21.885 9.885A9.884 9.884 0 0012 0a9.884 9.884 0 00-9.885 9.885c0 1.26.24 2.46.675 3.555.84 2.835 3.285 5.79 7.8 10.005a2.079 2.079 0 002.82 0c4.53-4.215 6.975-7.17 7.8-10.005.435-1.11.675-2.31.675-3.57v.015z"
        ></path>
        <path
          fill="#fff"
          d="M12 14.82a4.935 4.935 0 100-9.87 4.935 4.935 0 000 9.87z"
        ></path>
      </g>
      <defs>
        <clipPath id="clip0_26_6934">
          <path fill="#fff" d="M0 0H24V24H0z"></path>
        </clipPath>
      </defs>
    </svg>
  );
};
