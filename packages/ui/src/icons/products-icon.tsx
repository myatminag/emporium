import { SVGProps } from 'react';

export const ProductIcon = (props: SVGProps<SVGSVGElement>) => {
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
        d="M21 16.622V7.378a.759.759 0 00-.384-.656l-8.25-4.64a.73.73 0 00-.732 0l-8.25 4.64A.76.76 0 003 7.378v9.244a.76.76 0 00.384.656l8.25 4.64a.732.732 0 00.732 0l8.25-4.64a.76.76 0 00.384-.656v0z"
      ></path>
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M16.594 14.297V9.422L7.5 4.406"
      ></path>
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M20.897 6.994L12.084 12l-8.98-5.006M12.084 12L12 22.012"
      ></path>
    </svg>
  );
};
