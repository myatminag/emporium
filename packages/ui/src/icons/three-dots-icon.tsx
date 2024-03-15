import { SVGProps } from 'react';

export const ThreeDotsIcon = (props: SVGProps<SVGSVGElement>) => {
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
        fill="currentColor"
        d="M12 13.125a1.125 1.125 0 100-2.25 1.125 1.125 0 000 2.25zM12 7.125a1.125 1.125 0 100-2.25 1.125 1.125 0 000 2.25zM12 19.125a1.125 1.125 0 100-2.25 1.125 1.125 0 000 2.25z"
      ></path>
    </svg>
  );
};
