import { SVGProps } from 'react';

export const NextControlIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="40"
      height="40"
      fill="none"
      viewBox="0 0 40 40"
      {...props}
    >
      <circle
        cx="20"
        cy="20"
        r="16"
        fill="#fff"
        stroke="#fff"
        strokeWidth="8"
        transform="matrix(-1 0 0 1 40 0)"
      ></circle>
      <path
        stroke="#0059DC"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M17.958 15.917L22.042 20l-4.084 4.083"
      ></path>
    </svg>
  );
};

export const PreviousControlIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="40"
      height="40"
      fill="none"
      viewBox="0 0 40 40"
      {...props}
    >
      <circle
        cx="20"
        cy="20"
        r="16"
        fill="#fff"
        stroke="#fff"
        strokeWidth="8"
      ></circle>
      <path
        stroke="#0059DC"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M22.167 15.667L17.833 20l4.334 4.333"
      ></path>
    </svg>
  );
};
