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

export const InfoIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="currentColor"
        d="M11 17h2v-6h-2zm1-8q.425 0 .713-.288T13 8q0-.425-.288-.712T12 7q-.425 0-.712.288T11 8q0 .425.288.713T12 9m0 13q-2.075 0-3.9-.788t-3.175-2.137q-1.35-1.35-2.137-3.175T2 12q0-2.075.788-3.9t2.137-3.175q1.35-1.35 3.175-2.137T12 2q2.075 0 3.9.788t3.175 2.137q1.35 1.35 2.138 3.175T22 12q0 2.075-.788 3.9t-2.137 3.175q-1.35 1.35-3.175 2.138T12 22"
      ></path>
    </svg>
  );
};
