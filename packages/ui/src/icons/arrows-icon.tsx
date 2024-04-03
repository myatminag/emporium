import { SVGProps } from 'react';

import { cn } from '@ecommerce/lib';

export const ChevronIcon = ({
  direction,
  className,
  ...props
}: SVGProps<SVGSVGElement> & {
  direction?: 'left' | 'right' | 'up' | 'down';
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="17"
      fill="none"
      viewBox="0 0 18 17"
      {...props}
      className={cn('md:cursor-pointer', className, {
        'rotate-180': direction === 'up',
        '-rotate-90': direction === 'right',
        'rotate-90': direction === 'left',
      })}
    >
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M9.627 10.244a.695.695 0 01-.983 0L5.166 6.766a.696.696 0 01.984-.983l2.985 2.985 2.986-2.985a.696.696 0 01.984.983l-3.478 3.478z"
        clipRule="evenodd"
      ></path>
    </svg>
  );
};
