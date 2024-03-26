import { SVGProps } from 'react';

export const LogoutIcon = (props: SVGProps<SVGSVGElement>) => {
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
        d="M12 4.5v7.125M16.5 5.081a8.25 8.25 0 11-9 0"
      ></path>
    </svg>
  );
};

export const PermissionIcon = (props: SVGProps<SVGSVGElement>) => {
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
        d="M12 15a1.875 1.875 0 100-3.75A1.875 1.875 0 0012 15zM12 15v2.25"
      ></path>
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M19.5 8.25h-15a.75.75 0 00-.75.75v10.5c0 .414.336.75.75.75h15a.75.75 0 00.75-.75V9a.75.75 0 00-.75-.75zM8.625 8.25V4.875a3.375 3.375 0 016.75 0V8.25"
      ></path>
    </svg>
  );
};

export const TogglePasswordIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path
        className="hs-password-active:hidden"
        d="M9.88 9.88a3 3 0 1 0 4.24 4.24"
      />
      <path
        className="hs-password-active:hidden"
        d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68"
      />
      <path
        className="hs-password-active:hidden"
        d="M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61"
      />
      <line
        className="hs-password-active:hidden"
        x1={2}
        x2={22}
        y1={2}
        y2={22}
      />
      <path
        className="hs-password-active:block hidden"
        d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"
      />
      <circle
        className="hs-password-active:block hidden"
        cx={12}
        cy={12}
        r={3}
      />
    </svg>
  );
};
