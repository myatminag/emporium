import { SVGProps } from 'react';

export const DashboardSettingIcon = (props: SVGProps<SVGSVGElement>) => {
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
        d="M12 16.5a4.5 4.5 0 100-9 4.5 4.5 0 000 9z"
      ></path>
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M17.222 6.103c.237.219.462.444.675.675l2.56.366c.416.724.738 1.5.955 2.306l-1.556 2.072s.028.637 0 .956l1.556 2.072a9.585 9.585 0 01-.956 2.306l-2.56.366s-.44.46-.674.675l-.366 2.56c-.724.416-1.5.738-2.306.956l-2.072-1.557a5.434 5.434 0 01-.956 0L9.45 21.412a9.584 9.584 0 01-2.306-.956l-.366-2.56a17.255 17.255 0 01-.675-.674l-2.56-.366a9.677 9.677 0 01-.956-2.306l1.557-2.072s-.028-.637 0-.956L2.587 9.45a9.582 9.582 0 01.957-2.306l2.559-.366c.219-.231.444-.456.675-.675l.366-2.56a9.676 9.676 0 012.306-.955l2.072 1.556c.318-.028.638-.028.956 0l2.072-1.556a9.582 9.582 0 012.306.956l.366 2.56z"
      ></path>
    </svg>
  );
};
